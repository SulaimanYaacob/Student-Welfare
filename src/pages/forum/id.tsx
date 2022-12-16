import { ActionIcon, Avatar, BackgroundImage, Footer, Grid, Group, Header, Paper, ScrollArea, Table, Text, TextInput } from '@mantine/core';
import React from 'react';
import { BiLeftArrowAlt, BiSend } from 'react-icons/bi';

function ForumPage() {
  return (
    <>
      <title>15th General Election</title>
      <Grid grow m={0}>
        <Grid.Col span="auto">
          <Group>
            <ActionIcon component="a" href="/forum">
              <BiLeftArrowAlt size={25} color="#000"/>
            </ActionIcon>
            <Text>Back to Forum</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={5} p={0}>
          <BackgroundImage
            src="https://w0.peakpx.com/wallpaper/154/372/HD-wallpaper-telegram-background-whatsapp-creative-android-pattern-texture-abstract.jpg"
          >
            <Header height={60} p="md" style={{ backgroundColor: "#373A40" }}>
              {
                <Text color="gray.0" mx="auto">
                  15th General Election
                </Text>
              }
            </Header>
            <ScrollArea style={{ height: 515 }} type="never">
              <Table verticalSpacing={"xl"}>
                <tbody>
                  <tr>
                    <td>
                      <Avatar color="cyan" radius="xl" ml="auto">
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
                      <Avatar color="cyan" radius="xl" mr="auto">
                        MPP
                      </Avatar>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Avatar color="cyan" radius="xl" ml="auto">
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
                      <Avatar color="cyan" radius="xl" mr="auto">
                        MPP
                      </Avatar>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Avatar color="cyan" radius="xl" ml="auto">
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
                      <Avatar color="cyan" radius="xl" mr="auto">
                        MPP
                      </Avatar>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Avatar color="cyan" radius="xl" ml="auto">
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
            <Footer height={60} p="xs" style={{ backgroundColor: "#373A40" }}>
              {
                <Grid grow align="center">
                  <Grid.Col span={10}>
                    <TextInput placeholder="Message" radius={"xl"}></TextInput>
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <ActionIcon ml="auto" variant="transparent">
                      <BiSend size={25} color="#FFF"/>
                    </ActionIcon>
                  </Grid.Col>
                </Grid>
              }
            </Footer>
          </BackgroundImage>
        </Grid.Col>
        <Grid.Col span="auto"></Grid.Col>
      </Grid>
    </>
  )
}

export default ForumPage;