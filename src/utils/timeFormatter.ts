import dayjs from "dayjs";

export const getFormattedDate = (date: Date) => {
  return dayjs(date).format("D MMMM YYYY");
};

export const getDuration = (start: Date, end: Date) => {
  const startEvent = dayjs(start).format("h:mm A");
  const endEvent = dayjs(end).format("h:mm A");

  return `${startEvent} - ${endEvent}`;
};
