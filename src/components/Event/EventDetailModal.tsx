import {
  createStyles,
  Group,
  Modal,
  Stack,
  Title,
  Text,
  Table,
  Button,
  ScrollArea,
} from "@mantine/core";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { defaultEventImage } from "../../types/constant";
import { getDuration, getFormattedDate } from "../../utils/timeFormatter";

const useStyle = createStyles((theme) => ({
  modalContainer: {
    ".mantine-Modal-modal": {
      color: theme.colors.background?.[0],
      background: theme.colors.primary?.[0],
      border: `solid 2px ${theme.colors.background?.[0]}`,
    },
  },
}));

type Props = {
  setOpened: Dispatch<SetStateAction<boolean>>;
  opened: boolean;
  title: string;
  venue: string;
  description: string | null;
  image: string | null;
  date: Date;
  timeStart: Date;
  timeEnd: Date;
};

function EventDetailModal({
  title,
  opened,
  setOpened,
  description,
  date,
  timeStart,
  timeEnd,
  venue,
  image,
}: Props) {
  const { classes } = useStyle();
  return (
    <Modal
      className={classes.modalContainer}
      withCloseButton={false}
      centered
      size={"60%"}
      lockScroll={false}
      opened={opened}
      onClose={() => setOpened(false)}
    >
      <Group align={"flex-start"} spacing="xl" grow noWrap>
        <Image
          priority
          src={image ? image : defaultEventImage}
          alt={title}
          width={400}
          height={400}
        />
        <Stack justify={"space-between"} sx={{ height: 400 }}>
          <ScrollArea type="never">
            <Stack spacing={"xl"}>
              <Stack spacing={"xs"}>
                <Title order={2}>{title}</Title>
                <Text>
                  {description
                    ? description
                    : "This person is not creative enough to explain the details of the event. I suggest not to attend this event"}
                </Text>
              </Stack>

              <Table
                sx={{ color: "white" }}
                withBorder={true}
                withColumnBorders={true}
              >
                <tbody>
                  <tr>
                    <td>Venue</td>
                    <td>{venue}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>{getFormattedDate(date)}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{getDuration(timeStart, timeEnd)}</td>
                  </tr>
                </tbody>
              </Table>
            </Stack>
          </ScrollArea>

          <Stack align={"center"}>
            <Button
              onClick={() => setOpened(false)}
              color={"primary.2"}
              sx={{ width: "150px" }}
            >
              Close
            </Button>
          </Stack>
        </Stack>
      </Group>
    </Modal>
  );
}

export default EventDetailModal;
