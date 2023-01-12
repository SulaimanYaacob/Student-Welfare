import { AppShell, createStyles, MediaQuery } from "@mantine/core";
import type { ReactNode } from "react";
import React from "react";
import Header from "./Header";
import Unsupported from "./Unsupported";

type Props = {
  children: ReactNode;
};

const useStyle = createStyles((theme) => ({
  appShell: {
    background: theme.colors.primary?.[0],
  },
}));

function LandingLayout({ children }: Props) {
  const { classes } = useStyle();
  return (
    <>
      <MediaQuery query="(max-width: 1200px)" styles={{ display: "none" }}>
        <AppShell className={classes.appShell} header={<Header />}>
          {children}
        </AppShell>
      </MediaQuery>
      <Unsupported />
    </>
  );
}

export default LandingLayout;
