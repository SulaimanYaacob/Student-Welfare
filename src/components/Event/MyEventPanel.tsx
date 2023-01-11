import {
  Stack,
  Table,
  Text,
  createStyles,
  Group,
  ActionIcon,
  Title,
  Modal,
  Button,
} from "@mantine/core";
import { getDuration, getFormattedDate } from "../../utils/dateHandler";
import { trpc } from "../../utils/trpc";
import {
  MdEdit,
  MdOutlineDelete,
  MdSentimentDissatisfied,
  MdOutlineAdd,
} from "react-icons/md";
import Image from "next/image";
import { defaultEventImage } from "../../utils/constant";
import useDeleteEvent from "../../hooks/useDeleteEvent";
import { useState } from "react";
import type { EventPost } from "@prisma/client";
import Loading from "../Loading";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  tableContainer: {
    fontWeight: 500,
    color: theme.colors.dark[9],
    background: theme.colors.gray[2],
    border: `solid 5px ${theme.colors.gray[2]}`,
    //boxShadow: `${theme.colors.secondary?.[9]} 0px 8px 24px`,
  },
  overWrappingText: {
    wordBreak: "break-all",
  },
}));

function MyEventPanel() {
  const { classes } = useStyles();
  const { data, isLoading, isRefetching } =
    trpc.eventPost.getMyEvents.useQuery();
  const [eventDetail, setDetailEvent] = useState<EventPost>();
  const { deleteEvent, disable, opened, setOpened } = useDeleteEvent();

  const handleOnClick = (eventDetail: EventPost) => {
    setOpened(true);
    setDetailEvent(eventDetail);
  };

  //! Refactor inside eventTab
  if (isLoading || isRefetching) return <Loading name="Events" />;

  //! Had to hardcode styling to prevent wrapping
  const rows = data?.map((event, index) => {
    return (
      <tr key={event.id} className={classes.overWrappingText}>
        <td>
          <Text align="center">{++index}</Text>
        </td>
        <td>
          <Image
            src={event.image ? event.image : defaultEventImage}
            alt={event.title}
            width="100"
            height="100"
          />
        </td>
        <td style={{ maxWidth: "8vw" }}>{event.title}</td>
        <td style={{ maxWidth: "25vw" }}>
          {event.description ? (
            event.description
          ) : (
            <Text color="red">Description is not available for this event</Text>
          )}
        </td>
        <td style={{ width: "10vw" }}>{event.venue}</td>
        <td>{getFormattedDate(event.date)}</td>
        <td>{getDuration(event.timeStart, event.timeEnd)}</td>
        <td>
          <Group noWrap>
            <ActionIcon
              component={Link}
              href={`/event/create?edit=${event.id}`}
              variant="transparent"
              color="green"
            >
              <MdEdit size={50} />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleOnClick(event)}
              variant="transparent"
              color="red"
            >
              <MdOutlineDelete size={50} />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <>
      {data && data.length ? (
        <>
          <Modal
            centered
            opened={opened}
            withCloseButton={false}
            onClose={() => setOpened(false)}
          >
            <Stack align="center">
              <Image
                src={eventDetail?.image ? eventDetail?.image : ""}
                alt={""}
                width="340"
                height="220"
              />
              <Title order={2} align="center">
                {eventDetail?.title}
              </Title>
              <Text weight={500} align="center">
                Are you sure you want to delete this event?
              </Text>
              <Group position="center">
                {eventDetail && (
                  <Button
                    onClick={() => deleteEvent(eventDetail.id)}
                    disabled={disable}
                    color="red"
                  >
                    Yes
                  </Button>
                )}

                <Button
                  onClick={() => setOpened(false)}
                  disabled={disable}
                  color="gray"
                >
                  Cancel
                </Button>
              </Group>
            </Stack>
          </Modal>

          <Stack mx="5vw" my="xl" align="flex-end">
            <Button
              component={Link}
              rightIcon={<MdOutlineAdd size="25" />}
              href="/event/create"
              color="teal.6"
              radius="sm"
            >
              Create Event
            </Button>
            <Table
              striped
              className={classes.tableContainer}
              verticalSpacing="md"
              horizontalSpacing="md"
            >
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Sample Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Venue</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Stack>
        </>
      ) : (
        <Stack m="auto" w="35%" spacing="xl" p="3vw" align="center">
          <MdSentimentDissatisfied color="pink" size={"225"} />
          <Title color="pink.2" order={3} align="center">
            {"Uh Oh, It seems you don't have any events running at the moment"}
          </Title>
          <Button component={Link} href="/event/create" color="teal.6">
            {"Let's Create One!"}
          </Button>
        </Stack>
      )}
    </>
  );
}

export default MyEventPanel;
