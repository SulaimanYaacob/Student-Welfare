import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import { EventPostInput } from "../schema/eventPost.schema";
import { trpc } from "../utils/trpc";

const useCreateEvent = () => {
  const [disable, setDisable] = useState(false);
  const { push } = useRouter();
  const { getInputProps, onSubmit, values } = useForm<EventPostInput>({
    validate: {
      title: (value: string) =>
        value
          ? value.length <= 50
            ? null
            : "Title cannot be more than 50 character"
          : "Title field is required",
      venue: (value) => {
        return value ? null : "Venue field is required";
      },
      description: (value: string) => {
        return value.length < 1000 ? null : "Max character is 1000";
      },
      date: (value: Date) => {
        return value
          ? value > new Date()
            ? null
            : "Date must be after today"
          : "Date field is required";
      },
      timeStart: (value: Date) => {
        return value ? null : "Start time field is required";
      },
      timeEnd: (value: Date) => {
        return value ? null : "End time field is required";
      },
    },
  });
  const { mutate: createMutation } = trpc.eventPost.createPost.useMutation({
    onMutate: () => {
      showNotification({
        id: "create-event",
        title: "Create",
        message: "Setting up new event",
        loading: true,
      });
      setDisable(true);
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
      updateNotification({
        id: "create-event",
        title: "Create Event Failed",
        message,
        color: "red",
        autoClose: 2000,
        icon: <TbX />,
      });
      setDisable(false);
    },
  });

  const submit = () => {
    return onSubmit((values) => {
      if (values) createMutation({ ...values });
    });
  };

  return { getInputProps, submit, values, disable };
};

export default useCreateEvent;
