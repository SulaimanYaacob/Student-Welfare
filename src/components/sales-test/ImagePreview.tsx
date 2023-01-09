import { FileWithPath } from "@mantine/dropzone";
import { Image, Box } from "@mantine/core";

type Props = {
  baseImage: string;
};

const ImagePreview = ({ baseImage }: Props) => {
  return (
    <Box
      sx={{
        width: "500px",
        height: "325px",
        border: "3px dotted gray",
        boxSizing: "unset",
      }}
    >
      <Image
        src={baseImage}
        imageProps={{ onLoad: () => URL.revokeObjectURL(baseImage) }}
        fit="fill"
        width="500px"
        height="325px"
      />
    </Box>
  );
};

export default ImagePreview;
