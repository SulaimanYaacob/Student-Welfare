import { FileWithPath } from "@mantine/dropzone";
import { Image, Box } from "@mantine/core";
import { fileBase64Conversion } from "../../utils/fileConversion";
import { useState } from "react";

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
