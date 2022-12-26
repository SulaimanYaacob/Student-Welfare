import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocal from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocal);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s",
    s: "1m",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    M: "1M",
    MM: "%dM",
    y: "1y",
    yy: "%dy",
  },
});

export const getFormattedDate = (date: Date) => {
  return dayjs(date).format("D MMM YYYY");
};

export const getDuration = (start: Date, end: Date) => {
  const startEvent = dayjs(start).format("h:mm A");
  const endEvent = dayjs(end).format("h:mm A");

  return `${startEvent} - ${endEvent}`;
};

export const getDaysLeft = (eventDate: Date) => {
  const currentDate = new Date().getTime();

  let daysLeft = Math.round(
    (eventDate.getTime() - currentDate) / (24 * 60 * 60 * 1000)
  );

  return ++daysLeft;
};

export const getCreatedAt = (createdAt: Date) => {
  return dayjs(createdAt).fromNow();
};
