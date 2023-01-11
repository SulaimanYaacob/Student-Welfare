import { Group, Stack, Title } from "@mantine/core";
import type { FileWithPath } from "@mantine/dropzone";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CreateEvent from "../../components/Event/CreateEvent";
import ImagePreview from "../../components/Event/ImagePreview";
import useCreateEvent from "../../hooks/useCreateEvent";
import useUpdateEvent from "../../hooks/useUpdateEvent";
import { fileBase64Conversion } from "../../utils/fileConversion";
import getServerSideProps from "../../utils/protectedRoute";
import { trpc } from "../../utils/trpc";

function SubmitEvent() {
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
  const { edit } = router.query;

  const { data: EventData } = trpc.eventPost.getSingleEvent.useQuery({
    EventId: edit as string,
  });

  files.map(async (file) => {
    const base64 = await fileBase64Conversion(file);

    setBaseImage(base64);

    EventData
      ? (updateValues.image = baseImage as string)
      : (eventValues.image = baseImage as string);
  });

  if (edit) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (EventData && edit) {
        setValues({
          id: EventData.id || undefined,
          title: EventData.title || undefined,
          description: EventData.description || undefined,
          venue: EventData.venue || undefined,
          date: EventData.date || undefined,
          timeStart: EventData.timeStart || undefined,
          timeEnd: EventData.timeEnd || undefined,
          image: EventData.image || "",
        });
        setBaseImage(EventData.image);
      }
    }, [EventData, edit, setValues]);
  }

  return (
    <>
      <title>Create Event</title>
      <Group sx={{ height: "100%" }} position="center" spacing={0} grow noWrap>
        <CreateEvent
          setFiles={setFiles}
          getInputProps={EventData ? getUpdateInput : getEventInput}
          submit={EventData ? update : create}
          values={EventData ? updateValues : eventValues}
          disable={EventData ? disableUpdate : disableCreate}
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

export default SubmitEvent;

export { getServerSideProps };
