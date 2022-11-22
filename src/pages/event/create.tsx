import { Group, Stack, Title } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import React, { useState } from "react";
import CreateEvent from "../../components/Event/CreateEvent";
import ImagePreview from "../../components/Event/ImagePreview";
import useCreateEvent from "../../hooks/useCreateEvent";
import getServerSideProps from "../../utils/protectedRoute";

function createEvent() {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const { submit, getInputProps, values, disable } = useCreateEvent();

  files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    values.image = imageUrl;
  });

  return (
    <Group sx={{ height: "100%" }} position="center" spacing={0} grow noWrap>
      <CreateEvent
        setFiles={setFiles}
        getInputProps={getInputProps}
        submit={submit}
        values={values}
        disable={disable}
      />
      <Stack spacing={"xl"} align={"center"} mx="5vw">
        <Title color={"background.0"}>Image Preview</Title>
        <ImagePreview files={files} />
      </Stack>
    </Group>
  );
}

export default createEvent;

export { getServerSideProps };
