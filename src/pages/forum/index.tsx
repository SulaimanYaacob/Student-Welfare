import { Stack, Title, createStyles, Group, Button, Menu, Modal } from "@mantine/core";
import React, { useState } from "react";
import getServerSideProps from "../../utils/protectedRoute";
import ForumTab from "../../components/Forum/ForumTab";
import { BiFilterAlt, BiNavigation, BiPlusCircle } from "react-icons/bi";
import CreateForum from "../../components/Forum/CreateForum";

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
    const [opened, setOpened] = useState(false);
    
    return (
      <>
        <title>Forum</title>
        <Stack className={classes.container}>
          <Modal
            centered
            opened={opened}
            onClose={() => setOpened(false)}
            title="New Topic"
          >
            <CreateForum />
          </Modal>
          <Title align="center" py="xs">~Discuss Your Problem With Us~</Title>
          <Group>
            <Button
              leftIcon={<BiPlusCircle size={20} />}
              onClick={() => setOpened(true)}
              py="auto"
            >
              Start New Topic
            </Button>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button leftIcon={<BiNavigation size={20}/>} py="auto">Personal Navigator</Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>My Forum</Menu.Item>
                <Menu.Item>My Messages</Menu.Item>
                <Menu.Item>My Likes</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu shadow="md" width={200} position="bottom-end" withArrow>
            <Menu.Target>
              <Button ml="auto" leftIcon={<BiFilterAlt size={20}/>} py="auto">Sort By</Button>
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
          <ForumTab />
        </Stack>
      </>
    );
  }

  export default ForumPage;

  export { getServerSideProps };