import { ActionIcon, Avatar, Badge, Grid, Group, Paper, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import { BiSend } from 'react-icons/bi';
import { BsChatRightText, BsFillHeartFill } from 'react-icons/bs';
import getServerSideProps from "../../utils/protectedRoute";

function ForumPage() {
  return (
    <>
      <title>15th General Election</title>
      <Paper my={"xl"} mx={"auto"} p={"sm"} radius={0} style={{maxWidth: 1000}}>
        <Paper p="sm" bg="dark.0" radius={0} withBorder>
          <Grid>
            <Grid.Col span="content">
              <Avatar color="cyan" radius="xl" mr="auto">
                MPP
              </Avatar>
            </Grid.Col>
            <Grid.Col span={11}>
              <Stack mx="sm" spacing={"xl"}>
                <Text td="underline" fz="lg">Majlis Perwakilan Pelajar UTM</Text>
                <Text fw={550}>
                  Group Discussion : 15th General Election
                </Text>
                <Group>
                  <BsFillHeartFill/>
                  <Text>10</Text>
                  <BsChatRightText/>
                  <Text>20</Text>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper  p="sm" bg="dark.0" radius={0} withBorder>
          <Grid>
            <Grid.Col span="content">
              <Avatar color="cyan" radius="xl" size="md" py="auto"></Avatar>
            </Grid.Col>
            <Grid.Col span={11}>
              <TextInput placeholder="Message" radius={"xl"} rightSection={
                <ActionIcon mr="auto" variant="transparent">
                  <BiSend size={25} color="dark.0"/>
                </ActionIcon>}>
              </TextInput>
            </Grid.Col>
          </Grid>
        </Paper>
        <Paper p="sm" bg="dark.0" radius={0} withBorder>
          <Paper shadow="lg" radius="lg" p="lg">
            <Grid>
              <Grid.Col span="content">
                <Avatar color="cyan" radius="xl" size="sm"></Avatar>
              </Grid.Col>
              <Grid.Col span={11}>
                <Stack>
                  <Group position="apart">
                    <Text  td="underline">Kamaruddin</Text>
                    <Group position="right" >
                      <Badge>12:00 PM</Badge>
                      <Badge>12-12-2022</Badge>
                    </Group>
                  </Group>
                  <Text align="justify">
                    When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Paper>
        </Paper>
        <Paper p="sm" bg="dark.0" radius={0} withBorder>
          <Paper shadow="lg" radius="lg" p="lg">
            <Grid>
              <Grid.Col span="content">
                <Avatar color="cyan" radius="xl" size="sm"></Avatar>
              </Grid.Col>
              <Grid.Col span={11}>
                <Stack>
                  <Group position="apart">
                    <Text  td="underline">Majlis Perwakilan Pelajar</Text>
                    <Group position="right" >
                      <Badge>12:00 PM</Badge>
                      <Badge>12-12-2022</Badge>
                    </Group>
                  </Group>
                  <Text align="justify">
                    When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?When can we know the date to going home for the election?
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Paper>
        </Paper>
      </Paper>
    </>
  )
}

export default ForumPage;
export {getServerSideProps};