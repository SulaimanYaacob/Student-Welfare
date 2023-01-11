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
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { defaultEventImage } from "../../utils/constant";
import { EventData } from "../../types/event.type";
import { getDuration, getFormattedDate } from "../../utils/dateHandler";

const useStyle = createStyles((theme) => ({
  modalContainer: {
    ".mantine-Modal-modal": {
      color: theme.colors.background?.[0],
      background: theme.colors.primary?.[0],
      border: `solid 2px ${theme.colors.background?.[0]}`,
    },
  },
  modalImage: {
    boxShadow: `${theme.colors.gray?.[5]} 3px 3px, ${theme.colors.gray?.[6]} 6px 6px`,
    border: `${theme.colors.gray?.[4]} solid 4px`,
    backgroundColor: theme.colors.gray?.[3],
    borderRadius: "10px",
  },
  linkToProfile: {
    textDecoration: "none",
    color: theme.colors.yellow[5],
    "&: hover": {
      color: theme.colors.yellow[3],
    },
  },
}));

type Props = {
  setOpened: Dispatch<SetStateAction<boolean>>;
  opened: boolean;
  event: EventData;
};

function EventDetailModal({ event, opened, setOpened }: Props) {
  const { classes } = useStyle();
  const {
    title,
    description,
    timeStart,
    timeEnd,
    date,
    image,
    venue,
    author,
    authorId,
  } = event;

  return (
    <Modal
      centered
      size={"85%"}
      opened={opened}
      lockScroll={false}
      withCloseButton={false}
      onClose={() => setOpened(false)}
      className={classes.modalContainer}
    >
      <Group align={"flex-start"} spacing="xl" grow noWrap>
        <Image
          className={classes.modalImage}
          priority
          alt={title}
          width="450"
          height="450"
          src={image ? image : defaultEventImage}
        />
        <Stack
          spacing={"xs"}
          justify={"space-between"}
          pos="relative"
          h="450px"
        >
          <ScrollArea>
            <Stack spacing={"xs"} h="240px" mr="sm">
              <Title order={2}>{title}</Title>
              <Text>
                {description
                  ? description
                  : "This person is not creative enough to explain the details of the event."}
              </Text>
            </Stack>
          </ScrollArea>
          <Table
            pos="absolute"
            bg="primary.1"
            bottom={55}
            sx={{ color: "pink", fontWeight: 500, borderRadius: "5px" }}
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
              {/* //TODO Link to profile page (make it clickable) */}
              <tr>
                <td>Created by</td>
                <td>
                  <Link
                    href={`/profile/${authorId}`}
                    className={classes.linkToProfile}
                  >
                    {author.name.length < 50
                      ? author.name
                      : `${author.name.substring(0, 50)}...`}
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
          <Stack align={"center"}>
            <Button
              onClick={() => setOpened(false)}
              color={"primary.2"}
              w="150px"
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
