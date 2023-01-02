import { Image, Paper, Text, Avatar, Stack, Group, Table, Button, Tabs } from "@mantine/core";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import getServerSideProps from "../../utils/protectedRoute";

  function ProfilePage() {
    
    return (
      <>
        <title>Profile</title>
        <Stack spacing="xs">
            <Paper bg="#FFF" mx="auto" mt="xl" mb="xs" radius="md" pb="xl" style={{ maxWidth: 1000 }}>

                    <Image 
                        src="https://static-cse.canva.com/blob/572029/removingbackgroundimages_Unsplash.jpeg"
                        width={1000}
                        height={250}
                        radius="md"
                    />

                <Stack ml={20} spacing="md">
                    <Avatar
                        mt={-80}
                        size={160}
                        radius={80}
                        style={{ border: "5px solid white"}}
                        src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
                    />
                    <Stack ml={10} spacing="xs">
                        <Group spacing="md">
                            <Text fz={25} fw="bold">David Addams</Text>
                            <Text fz={25} fw="bold" c="dimmed">22</Text>
                        </Group>
                        <Text fz={15}>Idaho, United States of America</Text>
                        <Group spacing="xl">
                            <Text fz={15}>@d_addams01</Text>
                            <BsDot/>
                            <Text fz={15} fw={530}>Software Engineering</Text>
                            <BsDot/>
                            <Text fz={15} c="dimmed" fw={550}>Full-Time Student</Text>
                        </Group>
                        <Group my="md" spacing="xl">
                            <Button variant="outline" color="dark" px="md">Message</Button>
                            <Button leftIcon={<FaShare/>}>Share Profile</Button>
                        </Group>
                    </Stack>
                </Stack>
            </Paper>
            <Paper bg="#FFF" mx="auto" mt="xl" mb="xs" py="xl" pl={10} radius="md" pb="xl" style={{ width: 1000 }}>
                <Stack ml={20}>
                    <Text fz={20} fw="bold">Student Details</Text>
                    <Table>
                        <tbody>
                            <tr>
                                <td style={{ width: 100}}><Text fz={15} fw={550}>Residential College</Text></td>
                                <td><Text fz={15}>Kolej Tun Dr Ismail</Text></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table>
                        <tbody>
                            <tr>
                                <td style={{ width: 100}}><Text fz={15} fw={550}>Faculty</Text></td>
                                <td><Text fz={15}>School of Computing, Faculty of Engineering</Text></td>
                            </tr>
                        </tbody>
                    </Table>
                </Stack>
            </Paper>
            <Paper bg="#FFF" mx="auto" mt="xl" mb="xs" py="xl" pl={10} radius="md" pb="xl" style={{ width: 1000 }}>
                <Stack  ml={20}>
                    <Text fz={20} fw="bold">My Activity</Text>
                    <Tabs variant="pills" defaultValue="myEvent" inverted>
                        <Tabs.List>
                            <Tabs.Tab value="myEvent">My Event</Tabs.Tab>  
                            <Tabs.Tab value="myForum">My Forum</Tabs.Tab>
                            <Tabs.Tab value="mySales">My Sales</Tabs.Tab>
                            <Tabs.Tab value="myLostFound">My Lost and Found</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="myEvent" py={30}>
                            Go to My Event Section
                        </Tabs.Panel>
                        <Tabs.Panel value="myForum" py={30}>
                            Go to My Forum Section
                        </Tabs.Panel>
                        <Tabs.Panel value="mySales" py={30}>
                            Go to My Sales Section
                        </Tabs.Panel>
                        <Tabs.Panel value="myLostFound" py={30}>
                            Go to My Lost and Found Section
                        </Tabs.Panel>
                    </Tabs>
                </Stack>
            </Paper>
        </Stack>
      </>
    );
  }

  export default ProfilePage;

  export { getServerSideProps };