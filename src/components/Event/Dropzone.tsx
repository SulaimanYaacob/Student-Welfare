import { Group, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { TbPhoto, TbUpload, TbX } from "react-icons/tb";

function FileDropzone({ setFiles, getInputProps }: any) {
  return (
    <>
      <Dropzone
        onDrop={setFiles}
        accept={IMAGE_MIME_TYPE}
        {...getInputProps("image")}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: "100%", pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <TbUpload size={50} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <TbX size={50} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <TbPhoto size={50} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
    </>
  );
}

export default FileDropzone;
