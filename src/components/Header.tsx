import { ActionIcon, Group, Title, createStyles, Header } from "@mantine/core";
import React from "react";
import {
  MdLogout,
  MdOutlineSettings,
  MdOutlineHome,
  MdPersonOutline,
} from "react-icons/md";

const useStyle = createStyles((theme) => ({
  headerContainer: {
    background: theme.colors.background?.[0],
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
  },
}));

function HeaderBar() {
  const { classes } = useStyle();

  return (
    <Header height={"70"} className={classes.headerContainer}>
      <Group position="apart" align="center" py="md" mx={"xl"}>
        <Title order={3}>STUDENT WELFARE SYSTEM</Title>
        <Group>
          <ActionIcon>
            <MdOutlineSettings size={75} />
          </ActionIcon>
          <ActionIcon>
            <MdOutlineHome size={75} />
          </ActionIcon>
          <ActionIcon>
            <MdPersonOutline size={75} />
          </ActionIcon>
          <ActionIcon>
            <MdLogout size={75} />
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
}

export default HeaderBar;
