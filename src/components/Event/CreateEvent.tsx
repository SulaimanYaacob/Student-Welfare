import {
  Container,
  Stack,
  TextInput,
  Title,
  createStyles,
  Textarea,
  Select,
  Group,
  Text,
  Button,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import React from "react";
import FileDropzone from "./Dropzone";

const useStyle = createStyles((theme) => ({
  container: {
    margin: "0 15vw",
    height: "100%",
    border: "5px solid",
    borderRadius: "10px",
    borderColor: theme.colors.background?.[0],
    backgroundColor: theme.colors.primary?.[2],
  },
  innerContainer: {
    height: "100%",
    borderRadius: "10px",
    background: theme.colors.background?.[0],
  },
}));

function CreateEvent() {
  const { classes } = useStyle();
  return (
    <Stack spacing={"xs"} p={"xl"} className={classes.container}>
      <Title color={"white"}>Fill Event Details</Title>
      <Stack
        spacing={"xs"}
        p="md"
        className={classes.innerContainer}
        justify="center"
      >
        <TextInput
          label={"Event Title"}
          placeholder="E.g. Marathon"
          withAsterisk
        />
        <Textarea
          label={"Description"}
          placeholder="Explain what's it about."
        />
        <Group grow>
          <Select label={"Venue"} data={[]} withAsterisk />
          <DatePicker
            label={"Date"}
            withAsterisk
            onChange={(e) => {
              console.log(e);
            }}
          />
        </Group>

        <Group grow>
          <TimeInput
            label={"Start"}
            format="12"
            amLabel="am"
            pmLabel="pm"
            withAsterisk
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
          />
        </Group>
        <FileDropzone />
        <Button type="submit" color={"primary.0"}>
          Create Event
        </Button>
      </Stack>
    </Stack>
  );
}

export default CreateEvent;
