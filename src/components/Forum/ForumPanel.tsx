import {
  Avatar,
  Button,
  Group,
  Paper,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import {
  BsChatRightText,
  BsFillHeartFill,
} from "react-icons/bs";
import { useToggle } from "@mantine/hooks";

function ForumPanel() {
  const [value, toggle] = useToggle(["#FFF", "red"]);

  return (
    <>
      <Stack>
        <Paper my={"sm"} mx={"md"} p={"sm"} radius={0}>
          <Paper p="sm" bg="dark.0" radius={0}>
            <Stack mx="sm">
              <Table fontSize={"md"}>
                <tbody>
                  <tr>
                    <td style={{ width: 70 }}>
                      <Avatar color="cyan" radius="xl" mr="auto">
                        MPP
                      </Avatar>
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
                    <td style={{ width: 70}}></td>
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
                    <td style={{ width: 70 }}></td>
                    <td>
                      <Group grow>
                        <Button onClick={() => toggle()}>
                          <BsFillHeartFill color={value} size={20} />
                          <Text fw={550} mx={"sm"}>
                            20
                          </Text>
                        </Button>
                        <Button
                          component="a"
                          href="/forum/id"
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
                    <td style={{ width: 70 }}>
                      <Avatar color="cyan" radius="xl" mr="auto">
                        MPP
                      </Avatar>
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
                    <td style={{ width: 70 }}></td>
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
                    <td style={{ width: 70 }}></td>
                    <td>
                      <Group grow>
                        <Button onClick={() => toggle()}>
                          <BsFillHeartFill color={value} size={20} />
                          <Text fw={550} mx={"sm"}>
                            20
                          </Text>
                        </Button>
                        <Button
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

export default ForumPanel;
