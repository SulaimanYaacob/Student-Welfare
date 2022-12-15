import {
  Affix,
  Button,
  Grid,
  Group,
  Menu,
  Modal,
  ScrollArea,
  Select,
  Stack,
  Tabs,
  Text,
  Transition,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React, { useState } from "react";
import { TbArrowUp, TbPlus } from "react-icons/tb";
import CreateForum from "./CreateForum";
import NewForumPanel from "./NewForumPanel";

function ForumTab() {
  const [scroll, scrollTo] = useWindowScroll();
  const [opened, setOpened] = useState(false);

  return (
    <Stack>
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="New Topic"
      >
        <CreateForum />
      </Modal>
      <Group mx={"md"}>
        <Button
          leftIcon={<TbPlus size={16} />}
          onClick={() => setOpened(true)}
        >
          Start New Topic
        </Button>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>Personal Navigator</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>My Question</Menu.Item>
            <Menu.Item>My Answer</Menu.Item>
            <Menu.Item>My Likes</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button ml="auto">Sort By</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Recently Added</Menu.Item>
            <Menu.Item>Alphabetically (A~Z)</Menu.Item>
            <Menu.Item>Alphabetically (Z~A)</Menu.Item>
            <Menu.Item>Most Likes</Menu.Item>
            <Menu.Item>Most Messages</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
      <ScrollArea style={{ height: 390 }}>
        <NewForumPanel />
            <Affix position={{ bottom: 20, right: 20 }}>
              <Transition transition="slide-up" mounted={scroll.y > 500}>
                {(transitionStyles) => (
                  <Button
                    color={"secondary.1"}
                    leftIcon={<TbArrowUp size={16} />}
                    style={transitionStyles}
                    onClick={() => scrollTo({ y: 0 })}
                  >
                    Scroll to top
                  </Button>
                )}
              </Transition>
            </Affix>
        </ScrollArea>
    </Stack>
  );
}

export default ForumTab;
