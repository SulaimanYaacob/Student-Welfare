import {
  BackgroundImage,
  Button,
  Drawer,
  Group,
  Paper,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { useState } from "react";
import {
  BsChatRightText,
  BsFillHeartFill,
  BsFillPersonFill,
} from "react-icons/bs";
import ForumChatWindow from "./ForumChatWindow";

function CategoryForumPanel() {
  const [value, toggle] = useToggle(["#FFF", "red"]);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Stack>
        <Paper my={"sm"} mx={"md"} p={"sm"} radius={0}>
          <Paper p="sm" bg="dark.0" radius={0}>
            <Stack mx="sm">
              <Table fontSize={"md"}>
                <tbody>
                  <tr>
                    <td style={{ width: 50 }}>
                      <BsFillPersonFill />
                    </td>
                    <td>
                      <Text td="underline">MPP UTM</Text>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table fontSize={"md"}>
                <tbody>
                  <tr>
                    <td style={{ width: 50 }}></td>
                    <td>
                      <Text fw={550}>
                        Group Discussion : 15th General Election
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table fontSize={"md"}>
                <tbody>
                  <tr>
                    <td style={{ width: 50 }}></td>
                    <td>
                      <Drawer
                        opened={opened}
                        onClose={() => setOpened(false)}
                        size="800px"
                      >
                        <BackgroundImage src="https://w0.peakpx.com/wallpaper/154/372/HD-wallpaper-telegram-background-whatsapp-creative-android-pattern-texture-abstract.jpg">
                          <ForumChatWindow />
                        </BackgroundImage>
                      </Drawer>
                      <Group grow>
                        <Button onClick={() => toggle()}>
                          <BsFillHeartFill color={value} size={20} />
                          <Text fw={550} mx={"sm"}>
                            20
                          </Text>
                        </Button>
                        <Button
                          onClick={() => setOpened(true)}
                          leftIcon={<BsChatRightText size={20} />}
                        >
                          Enter Chat
                        </Button>
                      </Group>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Stack>
          </Paper>
        </Paper>
        <Paper my={"sm"} mx={"md"} p={"sm"} radius={0}>
          <Paper p="sm" bg="dark.0" radius={0}>
            <Stack mx="sm">
              <Table fontSize={"md"}>
                <tbody>
                  <tr>
                    <td style={{ width: 50 }}>
                      <BsFillPersonFill />
                    </td>
                    <td>
                      <Text td="underline">MPP UTM</Text>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table fontSize={"md"}>
                <tbody>
                  <tr>
                    <td style={{ width: 50 }}></td>
                    <td>
                      <Text fw={550}>
                        Group Discussion : Festival Convocation 2022
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table fontSize={"md"}>
                <tbody>
                  <tr>
                    <td style={{ width: 50 }}></td>
                    <td>
                      <Group grow>
                        <Button onClick={() => toggle()}>
                          <BsFillHeartFill color={value} size={20} />
                          <Text fw={550} mx={"sm"}>
                            20
                          </Text>
                        </Button>
                        <Button
                          onClick={() => setOpened(true)}
                          leftIcon={<BsChatRightText size={20} />}
                        >
                          Enter Chat
                        </Button>
                      </Group>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Stack>
          </Paper>
        </Paper>
      </Stack>
    </>
  );
}

export default CategoryForumPanel;
