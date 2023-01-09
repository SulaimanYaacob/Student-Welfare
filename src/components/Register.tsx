import { Button, Modal, PasswordInput, Stack, TextInput } from "@mantine/core";
import type { Dispatch, SetStateAction } from "react";
import React from "react";

type Props = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

function Register({ opened, setOpened }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Introduce yourself!"
    >
      <Stack>
        <TextInput label="Name"></TextInput>
        <TextInput label="Email"></TextInput>
        <PasswordInput label="Password" />
        <Button color={"primary.0"}>Submit</Button>
      </Stack>
    </Modal>
  );
}

export default Register;
