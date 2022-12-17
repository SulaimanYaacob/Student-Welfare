import { showNotification, updateNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import { trpc } from "../utils/trpc";

const useDeleteEvent = () => {
  const [opened, setOpened] = useState(false);
  const [disable, setDisable] = useState(false);
  const utils = trpc.useContext(); // need to use react-query

  const handleModalProcess = (onProcess: boolean) => {
    setOpened(onProcess);
    setDisable(onProcess);
    if (!onProcess) utils.eventPost.invalidate();
  };

  //TODO Refactor this code use isLoading this time
  const { mutateAsync: deleteMutation, isSuccess } =
    trpc.eventPost.deleteEvent.useMutation({
      onMutate: () => {
        handleModalProcess(true),
          showNotification({
            id: "delete-event",
            title: "Delete Event",
            message: "Removing Event",
            loading: true,
          });
      },
      onSuccess: (data: any) => {
        updateNotification({
          id: "delete-event",
          title: "Success!",
          message: `${data.title} successfully deleted`,
          icon: <TbCheck />,
          color: "teal",
        });
        handleModalProcess(false);
      },
      onError: ({ message }) => {
        const data = JSON.parse(message);
        handleModalProcess(false),
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
      },
    });

  const deleteEvent = (id: string) => {
    id &&
      deleteMutation({
        id,
      });
  };

  return {
    deleteEvent,
    disable,
    setOpened,
    opened,
    isSuccess,
  };
};

export default useDeleteEvent;
