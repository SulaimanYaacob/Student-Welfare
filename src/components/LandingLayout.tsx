import { AppShell, BackgroundImage, createStyles } from "@mantine/core";
import type { ReactNode } from "react";
import React from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const useStyle = createStyles((theme) => ({
  appShell: {
    background: theme.colors.primary?.[0],
    //background: "#674644",
  },
}));

function LandingLayout({ children }: Props) {
  const { classes } = useStyle();
  return (
    <BackgroundImage src={"background.svg"}>
      <AppShell className={classes.appShell} header={<Header />}>
        {children}
      </AppShell>
    </BackgroundImage>
  );
}

export default LandingLayout;
