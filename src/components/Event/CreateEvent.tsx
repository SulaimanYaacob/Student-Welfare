import {
  Stack,
  TextInput,
  Title,
  createStyles,
  Textarea,
  Select,
  Group,
  Button,
  Divider,
  Paper,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import type { FileWithPath } from "@mantine/dropzone";
import type { GetInputProps } from "@mantine/form/lib/types";
import type { Dispatch, FormEventHandler, SetStateAction } from "react";
import React from "react";
import { allVenues } from "../../data/venues";
import type { EventPostInput } from "../../schema/eventPost.schema";
import FileDropzone from "./Dropzone";

const useStyle = createStyles((theme) => ({
  container: {
    marginLeft: "10vw",
    border: "1px solid",
    borderRadius: "10px",
    borderColor: theme.colors.dark?.[9],
    backgroundColor: theme.colors.primary?.[2],
  },
  innerContainer: {
    background: theme.colors.background?.[0],
  },
}));

type Props = {
  setFiles: Dispatch<SetStateAction<FileWithPath[]>>;
  getInputProps: GetInputProps<{
    image?: string | undefined;
    title: string;
    description: string;
    venue: string;
    date: Date;
    timeStart: Date;
    timeEnd: Date;
  }>;
  submit: () => FormEventHandler<HTMLFormElement> | undefined;
  values: EventPostInput;
  disable: boolean;
};

function CreateEvent({ setFiles, submit, getInputProps, disable }: Props) {
  const { classes } = useStyle();

  return (
    <Paper shadow="xs" p="xs" miw="25vw" className={classes.container}>
      <form onSubmit={submit()}>
        <Stack
          p="md"
          spacing="xs"
          justify="center"
          className={classes.innerContainer}
        >
          <Title order={2}>Fill Event Details</Title>
          <Divider />
          <TextInput
            label={"Event Title"}
            placeholder="E.g. Marathon"
            withAsterisk
            {...getInputProps("title")}
          />
          <Textarea
            label={"Description"}
            placeholder="Explain what's it about."
            minRows={3}
            {...getInputProps("description")}
          />
          <Group grow>
            <Select
              searchable
              label={"Venue"}
              data={
                allVenues?.map(({ venue }) => ({
                  label: venue,
                  value: venue,
                })) || []
              }
              withAsterisk
              {...getInputProps("venue")}
            />
            <DatePicker
              label={"Date"}
              withAsterisk
              {...getInputProps("date")}
            />
          </Group>

          <Group grow>
            <TimeInput
              label="Start"
              format="12"
              amLabel="am"
              pmLabel="pm"
              withAsterisk
              {...getInputProps("timeStart")}
            />
            <TimeInput
              label="End"
              format="12"
              amLabel="am"
              pmLabel="pm"
              withAsterisk
              {...getInputProps("timeEnd")}
            />
          </Group>
          <FileDropzone setFiles={setFiles} />
          <Button type="submit" color={"primary.0"} disabled={disable}>
            Submit Event
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default CreateEvent;
