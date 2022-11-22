import { FileWithPath } from "@mantine/dropzone";
import { Image, Box, Title } from "@mantine/core";
import { GetInputProps } from "@mantine/form/lib/types";

type Props = {
  files: FileWithPath[];
};

const ImagePreview = ({ files }: Props) => {
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    console.log(file);

    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        fit="fill"
        width="400px"
        height="250px"
      />
    );
  });

  return (
    <Box
      sx={{
        width: "400px",
        height: "250px",
        border: "3px dotted gray",
        boxSizing: "unset",
      }}
    >
      {previews}
    </Box>
  );
};

export default ImagePreview;
