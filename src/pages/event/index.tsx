import { Stack, Title, createStyles } from "@mantine/core";
import React from "react";
import getServerSideProps from "../../utils/protectedRoute";
import EventTab from "../../components/Event/EventTab";

const useStyle = createStyles((theme) => ({
  container: {
    width: "100%",
    color: theme.colors.background?.[0],
    ".mantine-Tabs-tab": {
      width: "10vw",
      color: theme.colors.background?.[0],
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&[data-active], &[data-active]:hover": {
        fontWeight: 500,
        color: theme.colors.secondary?.[0],
        backgroundColor: "transparent",
        borderBottomColor: theme.colors.secondary?.[0],
        borderBottom: "solid 3px",
      },
    },
  },
}));

function EventPage() {
  const { classes } = useStyle();
  return (
    //! Remove LandingLayout Once Railway is available to use
    <>
      <title>Events</title>
      <Stack className={classes.container}>
        <Title align="center">~We Create Wonderful Events~</Title>
        <EventTab />
      </Stack>
    </>
  );
}

export default EventPage;

export { getServerSideProps };
