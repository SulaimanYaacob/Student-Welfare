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
  FileInput,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import { FileWithPath } from "@mantine/dropzone";
import { GetInputProps } from "@mantine/form/lib/types";
import React, { Dispatch, FormEventHandler, SetStateAction } from "react";
import { CreateEventPostInput } from "../../schema/eventPost.schema";
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
    borderRadius: "10px",
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
  values: CreateEventPostInput;
  disable: boolean;
};

function CreateEvent({
  setFiles,
  submit,
  getInputProps,
  values,
  disable,
}: Props) {
  const { classes } = useStyle();

  console.log(values);

  return (
    <Paper shadow={"xs"} p={"xl"} className={classes.container}>
      <form onSubmit={submit()}>
        <Stack
          p="md"
          spacing={"xs"}
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
            {...getInputProps("description")}
          />
          <Group grow>
            <Select
              label={"Venue"}
              data={[{ value: "tango", label: "Tango" }]}
              withAsterisk
              {...getInputProps("venue")}
            />
            <DatePicker
              label={"Date"}
              withAsterisk
              onChange={(e) => {
                console.log(e);
              }}
              {...getInputProps("date")}
            />
          </Group>

          <Group grow>
            <TimeInput
              label={"Start"}
              format="12"
              amLabel="am"
              pmLabel="pm"
              withAsterisk
              {...getInputProps("timeStart")}
            />
            <TimeInput
              onChange={(e) => {
                console.log(e.getHours());
              }}
              label={"End"}
              format="12"
              amLabel="am"
              pmLabel="pm"
              withAsterisk
              {...getInputProps("timeEnd")}
            />
          </Group>
          <FileDropzone setFiles={setFiles} getInputProps={getInputProps} />
          <Button type="submit" color={"primary.0"} disabled={disable}>
            Create Event
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default CreateEvent;
