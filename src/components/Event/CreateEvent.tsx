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
import React from "react";
import useCreateEvent from "../../hooks/useCreateEvent";
import FileDropzone from "./Dropzone";

const useStyle = createStyles((theme) => ({
  container: {
    margin: "0 15vw",
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

function CreateEvent() {
  const { classes } = useStyle();
  const { submit, getInputProps } = useCreateEvent();

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
          <FileDropzone {...getInputProps("image")} />
          <Button type="submit" color={"primary.0"}>
            Create Event
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default CreateEvent;
