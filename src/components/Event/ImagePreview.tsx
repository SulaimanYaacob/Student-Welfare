import { FileWithPath } from "@mantine/dropzone";
import { Image, Box, Title } from "@mantine/core";

type Props = {
  files: FileWithPath[];
};

const ImagePreview = ({ files }: Props) => {
  console.log(files);
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);

    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        fit="fill"
        width="300px"
        height="150px"
      />
    );
  });

  return (
    <Box
      sx={{
        width: "300px",
        height: "150px",
        border: "3px dotted gray",
        boxSizing: "unset",
      }}
    >
      {previews}
    </Box>
  );
};

export default ImagePreview;
