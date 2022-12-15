import {
  Stack,
  Table,
  Text,
  createStyles,
  Group,
  ActionIcon,
  Loader,
  Title,
} from "@mantine/core";
import { getDuration, getFormattedDate } from "../../utils/dateHandler";
import { trpc } from "../../utils/trpc";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import Image from "next/image";
import { defaultEventImage } from "../../types/constant";
import useDeleteEvent from "../../hooks/useDeleteEvent";

const useStyles = createStyles((theme) => ({
  tableContainer: {
    fontWeight: 500,
    color: theme.colors.dark[9],
    background: theme.colors.background?.[0],
    boxShadow: `${theme.colors.secondary?.[9]} 0px 8px 24px`,

    thead: {
      tr: {
        background: theme.colors.gray[1],
        th: {
          color: theme.colors.primary?.[0],
        },
      },
    },
  },
}));

function MyEventPanel() {
  const { classes } = useStyles();
  const { data, isLoading } = trpc.eventPost.getMyEvent.useQuery();
  const { deleteEvent, disable } = useDeleteEvent();
  // const deleteEvent = trpc.eventPost.deleteEvent.useMutation({

  // });

  if (isLoading) {
    return (
      <Group position="center" m="10vw">
        <Loader size={"xl"} variant="oval" color={"gold"} />
        <Title order={2} color={"gold"}>
          Loading Events
        </Title>
      </Group>
    );
  }

  const rows = data?.map((event, index) => {
    return (
      <tr key={event.id}>
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
        <td>{event.title}</td>
        <td>
          {event.description ? (
            event.description
          ) : (
            <Text color="red">Description is not available for this event</Text>
          )}
        </td>
        <td>{event.venue}</td>
        <td>{getFormattedDate(event.date)}</td>
        <td>{getDuration(event.timeStart, event.timeEnd)}</td>
        <td>
          <Group noWrap>
            <ActionIcon variant="transparent" color="green">
              <MdEdit size={50} />
            </ActionIcon>
            <ActionIcon
              onClick={() => deleteEvent(event.id)}
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
      <Stack m={"xl"} spacing="xl">
        <Table
          className={classes.tableContainer}
          verticalSpacing="lg"
          horizontalSpacing="lg"
          withColumnBorders={true}
          withBorder={true}
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
  );
}

export default MyEventPanel;
