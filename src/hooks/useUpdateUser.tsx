import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import type { UserUpdateInputType } from "../types/user.type";
import { trpc } from "../utils/trpc";

const useUpdateUser = () => {
  const [disable, setDisable] = useState(false);
  const { reload } = useRouter();
  const utils = trpc.useContext();
  const { getInputProps, onSubmit, values, setValues } =
    useForm<UserUpdateInputType>({ validate: {} });

  const { mutate: updateMutation } = trpc.userRouter.updateUserById.useMutation(
    {
      onMutate: () => {
        showNotification({
          id: "update-profile",
          title: "Update",
          message: "Updating your profile",
          loading: true,
        });
        setDisable(true);
      },
      onSuccess: () => {
        updateNotification({
          id: "update-profile",
          title: "Update",
          message: `Profile has successfully updated`,
          icon: <TbCheck />,
          color: "teal",
          onClose: () => {
            utils.userRouter.getUserById.invalidate();
            reload();
          },
        });
        reload();
      },
      onError: ({ message }) => {
        updateNotification({
          id: "update-profile",
          title: "Error Occurred",
          message,
          color: "red",
          autoClose: 2000,
          icon: <TbX />,
        });
        setDisable(false);
      },
    }
  );

  const submit = () => {
    return onSubmit((values) => {
      if (values) updateMutation({ ...values });
    });
  };

  return { getInputProps, submit, values, disable, setValues };
};

export default useUpdateUser;
