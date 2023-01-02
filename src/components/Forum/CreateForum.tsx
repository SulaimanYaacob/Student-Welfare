import { Button, Select, Stack, Text, TextInput } from "@mantine/core";

function CreateForum() {
  return (
    <>
      <Stack spacing={"lg"}>
        <Text>Forum Title</Text>
        <TextInput placeholder="Title"></TextInput>
        <Text>Forum Category</Text>
        <Select
          placeholder="Choose One"
          data={[
            { value: "Question", label: "Instant Question" },
            { value: "Discussion", label: "Group Discussion" },
          ]}
        ></Select>
        <Button type="submit">Create</Button>
      </Stack>
    </>
  );
}

export default CreateForum;
