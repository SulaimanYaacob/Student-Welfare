import {
  ActionIcon,
  Group,
  Title,
  createStyles,
  Header,
  Menu,
} from "@mantine/core";
import React from "react";
import {
  MdLogout,
  MdOutlineSettings,
  MdOutlineHome,
  MdPersonOutline,
} from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const useStyle = createStyles((theme) => ({
  headerContainer: {
    background: theme.colors.background?.[0],
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
  },
}));

function HeaderBar() {
  const { classes } = useStyle();
  const { data: session } = useSession();

  return (
    <Header height={"70"} className={classes.headerContainer}>
      <Group position="apart" align="center" py="md" mx={"xl"}>
        <Title order={3}>STUDENT WELFARE SYSTEM</Title>
        <Group>
          <ActionIcon component={Link} href="/">
            <MdOutlineHome size={75} />
          </ActionIcon>
          <ActionIcon>
            <MdPersonOutline size={75} />
          </ActionIcon>
          <Menu position="top-start" offset={18} radius={0}>
            <Menu.Target>
              <ActionIcon>
                <MdOutlineSettings size={75} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/auth/login" })
                }
                icon={<MdLogout />}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Header>
  );
}

export default HeaderBar;
