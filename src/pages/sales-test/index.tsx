import { createStyles, Stack, Title } from "@mantine/core";
import React from "react";
import getServerSideProps from "../../utils/protectedRoute";
import SalesTab from "../../components/sales-test/SalesTab";

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

function SalesPage() {
    const { classes } = useStyle();

    return (
        <>
            <title>Sales</title>
            <Stack className={classes.container}>
                <Title align="center">~Affordable Item Sales~</Title>
                <SalesTab/>
            </Stack>
        </>
    );
}

export default SalesPage;

export { getServerSideProps };