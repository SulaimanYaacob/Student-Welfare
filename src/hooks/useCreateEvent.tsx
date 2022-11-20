import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React from "react";
import { TbCheck, TbX } from "react-icons/tb";
import { CreateEventPostInput } from "../schema/eventPost.schema";
import { trpc } from "../utils/trpc";

const useCreateEvent = () => {
  const { push } = useRouter();
  const { getInputProps, onSubmit } = useForm<CreateEventPostInput>();
  const { mutate: createMutation } = trpc.eventPost.createPost.useMutation({
    onMutate: (data) => {
      showNotification({
        id: "create-event",
        title: "Create",
        message: "Setting up new event",
        loading: true,
      });
    },
    onSuccess: (data: any) => {
      updateNotification({
        id: "create-event",
        title: "Event Created",
        message: `${data.title} successfully created`,
        icon: <TbCheck />,
        color: "teal",
        onClose: () => {
          push("/event");
        },
      });
      push("/event");
    },
    onError: ({ message }) => {
      const data = JSON.parse(message);
      data.map((item: any) => {
        updateNotification({
          id: "create-event",
          title: "Error Occured",
          message: `Missing input ${item.path[0]} `,
          color: "red",
          autoClose: 2000,
          icon: <TbX />,
        });
      });
    },
  });

  const submit = () => {
    return onSubmit((values) => {
      if (values) createMutation({ ...values });
    });
  };

  return { getInputProps, submit };
};

export default useCreateEvent;