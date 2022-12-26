import { FileWithPath } from "@mantine/dropzone";
import { Image, Box } from "@mantine/core";

type Props = {
  files: FileWithPath[];
  baseImage: string;
};

const ImagePreview = ({ files, baseImage }: Props) => {
  const previews = files.map((file, index) => {
    return (
      <Image
        key={index}
        src={baseImage}
        imageProps={{ onLoad: () => URL.revokeObjectURL(baseImage) }}
        fit="fill"
        width="500px"
        height="325px"
      />
    );
  });

  return (
    <Box
      sx={{
        width: "500px",
        height: "325px",
        border: "3px dotted gray",
        boxSizing: "unset",
      }}
    >
      {previews}
    </Box>
  );
};

export default ImagePreview;
