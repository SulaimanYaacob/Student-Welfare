import { AppShell, createStyles } from "@mantine/core";
import React, { ReactNode } from "react";
import Header from "./Header";

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
    <AppShell className={classes.appShell} header={<Header />}>
      {children}
    </AppShell>
  );
}

export default LandingLayout;
