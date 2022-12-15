import { Stack, Title, createStyles, Group, Button } from "@mantine/core";
import React from "react";
import getServerSideProps from "../../utils/protectedRoute";
import ForumTab from "../../components/Forum/ForumTab";

const useStyle = createStyles((theme) => ({
    container: {
      width: "100%",
      color: theme.colors.background?.[0],
      ".mantine-Tabs-tab": {
        width: "10vw",
        color: theme.colors.dark,
        background: theme.colors.background?.[0],
        "&:hover":{
        color: theme.colors.background?.[0],
        background: theme.colors.dark,
        },
        "&[data-active], &[data-active]:hover": {
          fontWeight: 500,
          color: theme.colors.background?.[0],
          background: theme.colors.cyan?.[7],
        },
      },
    },
  }));
  
  function ForumPage() {
    const { classes } = useStyle();
    return (
      <>
        <title>Forum</title>
        <Stack className={classes.container}>
          <Title align="center" py="xs">~Discuss Your Problem With Us~</Title>
          <ForumTab />
        </Stack>
      </>
    );
  }

  export default ForumPage;

  export { getServerSideProps };