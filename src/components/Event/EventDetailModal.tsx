import { Group, Modal, Stack } from "@mantine/core";
import Image from "next/image";
import React from "react";

function EventDetailModal() {
  return (
    <Modal title="Event Detail" opened={true} onClose={() => ({})}>
      <Group>
        <Image src={""} alt={""} />
        <Stack></Stack>
      </Group>
    </Modal>
  );
}

export default EventDetailModal;
