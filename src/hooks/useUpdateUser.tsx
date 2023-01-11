import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { useState } from "react";
import { TbCheck, TbX } from "react-icons/tb";
import type { UserUpdateInputType } from "../types/user.type";
import { trpc } from "../utils/trpc";

type Props = {
  onMutate?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
};

const useUpdateUser = (props?: Props) => {
  const [disable, setDisable] = useState(false);
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
        props?.onMutate?.();
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
          },
        });
        props?.onSuccess?.();
        setDisable(false);
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
        props?.onError?.();
        setDisable(false);
      },
    }
  );

  const submit = (imageData?: string) => {
    return onSubmit((values) => {
      if (imageData) updateMutation({ ...values, image: imageData });
      if (values) updateMutation({ ...values });
    });
  };

  return { getInputProps, submit, values, disable, setValues };
};

export default useUpdateUser;
