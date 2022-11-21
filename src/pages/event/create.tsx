import { Group, Stack, Title } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import React, { useState } from "react";
import CreateEvent from "../../components/Event/CreateEvent";
import ImagePreview from "../../components/Event/ImagePreview";
import getServerSideProps from "../../utils/protectedRoute";

function createEvent() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  return (
    <Group position="center" spacing={0} grow noWrap>
      <CreateEvent setFiles={setFiles} />
      <Stack spacing={"xl"} align={"center"} mr="10vw">
        <Title color={"background.0"}>Image Preview</Title>
        <ImagePreview files={files} />
      </Stack>
    </Group>
  );
}

export default createEvent;

export { getServerSideProps };
