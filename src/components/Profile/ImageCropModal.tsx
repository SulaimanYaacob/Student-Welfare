import { Button, Modal, Stack } from "@mantine/core";
import { FileButton } from "@mantine/core";
import "cropperjs/dist/cropper.css";
import React, { useEffect, useState } from "react";
import type { ReactCropperElement } from "react-cropper";
import Cropper from "react-cropper";
import useUpdateUser from "../../hooks/useUpdateUser";
import type { UserUpdateOutputType } from "../../types/user.type";
import { fileBase64Conversion } from "../../utils/fileConversion";

type Props = {
  title?: string;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserUpdateOutputType;
};

function ImageCropModal({ title, opened, setOpened, userData }: Props) {
  const [cropData, setCropData] = useState<string>();
  const [cropper, setCropper] = useState<ReactCropperElement["cropper"]>();
  const [image, setImage] = useState<string>();
  const [disableButton, setDisableButton] = useState(true);
  const { setValues, submit } = useUpdateUser({
    onMutate: () => setDisableButton(true),
    onSuccess() {
      setDisableButton(true), setImage(undefined), setOpened(false);
    },
    onError: () => setDisableButton(false),
  });

  const onUpload = async (e: File) => {
    if (e) {
      setOpened(true);
      const convertedFile = await fileBase64Conversion(e);
      setImage(convertedFile as string);
      setDisableButton(false);
    }
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  useEffect(() => {
    if (userData) {
      setValues({
        name: userData.name || "",
        age: userData.age || undefined,
        bio: userData.bio || "",
        studyMode: userData.studyMode || "FULLTIME",
        college: userData.college || "",
        course: userData.course || "",
        faculty: userData.faculty || "",
        phoneNo: userData.phoneNo || "",
      });
    }
  }, [setValues, userData]);

  return (
    <Modal
      title={title || "Crop Image"}
      padding="xl"
      opened={opened}
      onClose={() => setOpened(false)}
      size="50%"
    >
      <form onSubmit={submit(cropData as string)}>
        <Stack align="center">
          <FileButton onChange={onUpload} accept="image/png,image/jpeg">
            {(props) => (
              <Button color="primary.0" variant="outline" {...props}>
                Upload image
              </Button>
            )}
          </FileButton>
          <Cropper
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            aspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={true} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
          <Button
            disabled={disableButton}
            type="submit"
            color="teal.6"
            onClick={getCropData}
          >
            Crop & Confirm
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}

export default ImageCropModal;
