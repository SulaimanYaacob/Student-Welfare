import { Group, Stack, Title } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateEvent from "../../components/Event/CreateEvent";
import ImagePreview from "../../components/Event/ImagePreview";
import useCreateEvent from "../../hooks/useCreateEvent";
import useUpdateEvent from "../../hooks/useUpdateEvent";
import { fileBase64Conversion } from "../../utils/fileConversion";
import getServerSideProps from "../../utils/protectedRoute";
import { trpc } from "../../utils/trpc";

function createEvent() {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [baseImage, setBaseImage] = useState<unknown | string | undefined>();
  const {
    submit: create,
    getInputProps: getEventInput,
    values: eventValues,
    disable: disableCreate,
  } = useCreateEvent();
  const {
    submit: update,
    getInputProps: getUpdateInput,
    values: updateValues,
    disable: disableUpdate,
    setValues,
  } = useUpdateEvent();
  const router = useRouter();
  const { edit, author } = router.query;
  const { data: session } = useSession();
  const authorizeToEdit = author === session?.user?.id;

  files.map(async (file) => {
    const base64 = await fileBase64Conversion(file);
    setBaseImage(base64);

    authorizeToEdit
      ? (updateValues.image = baseImage as string)
      : (eventValues.image = baseImage as string);
  });

  if (authorizeToEdit) {
    const { data: EventData } = trpc.eventPost.getSingleEvent.useQuery({
      id: edit as string,
    });

    useEffect(() => {
      if (EventData && authorizeToEdit) {
        setValues({
          id: EventData.id!,
          title: EventData.title!,
          description: EventData.description!,
          venue: EventData.venue!,
          date: EventData.date!,
          timeStart: EventData.timeStart!,
          timeEnd: EventData.timeEnd!,
          image: EventData.image! || "",
        });
        setBaseImage(EventData.image);
      }
    }, [EventData, authorizeToEdit]);
  }

  return (
    <>
      <title>Create Event</title>
      <Group sx={{ height: "100%" }} position="center" spacing={0} grow noWrap>
        <CreateEvent
          setFiles={setFiles}
          getInputProps={authorizeToEdit ? getUpdateInput : getEventInput}
          submit={authorizeToEdit ? update : create}
          values={authorizeToEdit ? updateValues : eventValues}
          disable={authorizeToEdit ? disableUpdate : disableCreate}
        />
        {/* Add Here Edit Event */}
        <Stack spacing={"xl"} align={"center"} mx="2.5vw">
          <Title color={"background.0"}>Image Preview</Title>
          <ImagePreview baseImage={baseImage as string} />
        </Stack>
      </Group>
    </>
  );
}

export default createEvent;

export { getServerSideProps };
