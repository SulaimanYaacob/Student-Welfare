import dayjs from "dayjs";

export const getFormattedDate = (date: Date) => {
  return dayjs(date).format("D MMMM YYYY");
};

export const getDuration = (start: Date, end: Date) => {
  const startEvent = dayjs(start).format("h:mm A");
  const endEvent = dayjs(end).format("h:mm A");

  return `${startEvent} - ${endEvent}`;
};

export const getDaysLeft = (eventDate: Date) => {
  const currentDate = new Date().getTime();
  console.log({ currentDate, eventDate });

  const daysLeft = Math.round(
    (eventDate.getTime() - currentDate) / (24 * 60 * 60 * 1000)
  );
  console.log(daysLeft);

  return daysLeft;
};
