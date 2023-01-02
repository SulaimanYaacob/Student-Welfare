import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import { EventPostInput } from "../schema/eventPost.schema";
import { trpc } from "../utils/trpc";

const useUpdateEvent = () => {
  const [disable, setDisable] = useState(false);
  const { push } = useRouter();
  const { getInputProps, onSubmit, values, setValues } =
    useForm<EventPostInput>({
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
  const { mutate: updateMutation } = trpc.eventPost.updateEvent.useMutation({
    onMutate: () => {
      showNotification({
        id: "update-event",
        title: "Update",
        message: "Updating an event",
        loading: true,
      });
      setDisable(true);
    },
    onSuccess: (data: any) => {
      updateNotification({
        id: "update-event",
        title: "Event Updated",
        message: `${data.title} successfully updated`,
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
          id: "update-event",
          title: "Error Occured",
          message: `Input ${item.path[0]} ${item.message}`,
          color: "red",
          autoClose: 2000,
          icon: <TbX />,
        });
      });
      setDisable(false);
    },
  });

  const submit = () => {
    return onSubmit((values) => {
      if (values) updateMutation({ ...values });
    });
  };

  return { getInputProps, submit, values, disable, setValues };
};

export default useUpdateEvent;
