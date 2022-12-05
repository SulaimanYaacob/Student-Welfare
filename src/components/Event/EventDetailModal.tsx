import {
  createStyles,
  Group,
  Modal,
  Stack,
  Title,
  Text,
  Table,
} from "@mantine/core";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { defaultEventImage } from "../../types/constant";

const useStyle = createStyles((theme) => ({}));

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
  const getDate = (date: Date) => {
    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1;
    const dateYear = date.getFullYear();

    return `${dateDay}/${dateMonth}/${dateYear}`;
  };

  const getDuration = (start: Date, end: Date) => {
    const startHour = start.getHours();
    const startMinutes = start.getMinutes();
    const endHour = end.getHours();
    return `${startHour}:${startMinutes} - ${endHour}`;
  };

  // getDuration(timeStart, timeEnd);

  // console.log(getDate(date));
  return (
    <Modal
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
        <Stack>
          <Title order={2}>{title}</Title>
          {description}

          <Table>
            <tbody>
              <tr>
                <td>Venue</td>
                <td>: {venue}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>: {getDate(date)}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>: {getDuration(timeStart, timeEnd)}</td>
              </tr>
            </tbody>
          </Table>
          {/* <Group>
            <Text>Venue</Text>
            <Text>: {venue}</Text>
          </Group>
          <Group>
            <Text>Date</Text>
            <Text>: {getDate(date)}</Text>
          </Group> */}
        </Stack>
      </Group>
    </Modal>
  );
}

export default EventDetailModal;
