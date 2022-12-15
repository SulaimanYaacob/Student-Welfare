import {
  ActionIcon,
  Avatar,
  Footer,
  Grid,
  Header,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { BiSend } from "react-icons/bi";

function ForumChatWindow() {
  return (
    <>
      <Header height={60} p="md" style={{ backgroundColor: "#373A40" }}>
        {
          <Text color="gray.0" mx="auto">
            15th General Election
          </Text>
        }
      </Header>
      <Footer height={55} p="xs" style={{ backgroundColor: "#373A40" }}>
        {
          <Grid grow align="center">
            <Grid.Col span={10}>
              <TextInput placeholder="Message"></TextInput>
            </Grid.Col>
            <Grid.Col span="auto">
              <ActionIcon ml="auto" variant="transparent">
                <BiSend size={25} />
              </ActionIcon>
            </Grid.Col>
          </Grid>
        }
      </Footer>
      <ScrollArea style={{ height: 600 }} type="never" pb={55} pt={10}>
        <Table verticalSpacing={"xl"}>
          <tbody>
            <tr>
              <td>
                <Avatar color="cyan" radius="xl">
                  MK
                </Avatar>
              </td>
              <td>
                <Paper shadow="lg" radius="lg" p="lg">
                  <Text>
                    When can we know the date to going home for the election?
                  </Text>
                </Paper>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Paper shadow="lg" radius="lg" p="lg">
                  <Text>
                    When can we know the date to going home for the election?
                  </Text>
                </Paper>
              </td>
              <td>
                <Avatar color="cyan" radius="xl">
                  MPP
                </Avatar>
              </td>
            </tr>
            <tr>
              <td>
                <Avatar color="cyan" radius="xl">
                  MK
                </Avatar>
              </td>
              <td>
                <Paper shadow="lg" radius="lg" p="lg">
                  <Text>
                    When can we know the date to going home for the election?
                  </Text>
                </Paper>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Paper shadow="lg" radius="lg" p="lg">
                  <Text>
                    When can we know the date to going home for the election?
                  </Text>
                </Paper>
              </td>
              <td>
                <Avatar color="cyan" radius="xl">
                  MPP
                </Avatar>
              </td>
            </tr>
            <tr>
              <td>
                <Avatar color="cyan" radius="xl">
                  MK
                </Avatar>
              </td>
              <td>
                <Paper shadow="lg" radius="lg" p="lg">
                  <Text>
                    When can we know the date to going home for the election?
                  </Text>
                </Paper>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Paper shadow="lg" radius="lg" p="lg">
                  <Text>
                    When can we know the date to going home for the election?
                  </Text>
                </Paper>
              </td>
              <td>
                <Avatar color="cyan" radius="xl">
                  MPP
                </Avatar>
              </td>
            </tr>
            <tr>
              <td>
                <Avatar color="cyan" radius="xl">
                  MK
                </Avatar>
              </td>
              <td>
                <Paper shadow="lg" radius="lg" p="lg">
                  <Text>
                    When can we know the date to going home for the election?
                  </Text>
                </Paper>
              </td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </ScrollArea>
    </>
  );
}

export default ForumChatWindow;
