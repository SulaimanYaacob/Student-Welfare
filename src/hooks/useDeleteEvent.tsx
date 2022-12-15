import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import { trpc } from "../utils/trpc";

const useDeleteEvent = () => {
  const [disable, setDisable] = useState(false);
  const { push } = useRouter();

  const { mutate: deleteMutation } = trpc.eventPost.deleteEvent.useMutation({
    onMutate: () => {
      showNotification({
        id: "delete-event",
        title: "Delete Event",
        message: "Removing Event",
        loading: true,
      });
      setDisable(true);
    },
    onSuccess: (data: any) => {
      updateNotification({
        id: "delete-event",
        title: "Success!",
        message: `${data.title} successfully deleted`,
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
          id: "delete-event",
          title: "Error Occured",
          message: `Unable to delete ${data.title}`,
          color: "red",
          autoClose: 2000,
          icon: <TbX />,
        });
      });
      setDisable(false);
    },
  });

  const deleteEvent = (id: string) => {
    if (id)
      deleteMutation({
        id,
      });
  };

  return { deleteEvent, disable };
};

export default useDeleteEvent;
