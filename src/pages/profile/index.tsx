export {};

// import {
//   Paper,
//   Text,
//   Avatar,
//   Stack,
//   ScrollArea,
//   Group,
//   Table,
//   Button,
//   ActionIcon,
//   Modal,
//   TextInput,
//   Grid,
// } from "@mantine/core";
// import Image from "next/image";
// import React, { useState } from "react";
// import { BsDot, BsFillTelephoneFill } from "react-icons/bs";
// import { FaPen, FaShare, FaTwitter } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
// import { SiInstagram } from "react-icons/si";
// import { defaultEventImage } from "../../types/constant";
// import getServerSideProps from "../../utils/protectedRoute";

// function ProfilePage() {
//   const [opened, setOpened] = useState(false);

//   return (
//     <>
//       <title>Profile</title>
//       <Modal
//         opened={opened}
//         onClose={() => setOpened(false)}
//         title="Edit Profile"
//         size="60%"
//       >
//         <Stack>
//           <TextInput label="Name"></TextInput>
//           <Grid>
//             <Grid.Col span={8}>
//               <TextInput label="Username"></TextInput>
//             </Grid.Col>
//             <Grid.Col span={4}>
//               <TextInput label="Age"></TextInput>
//             </Grid.Col>
//           </Grid>
//           <TextInput label="Hometown"></TextInput>
//           <TextInput label="Residential College"></TextInput>
//           <Grid>
//             <Grid.Col span={8}>
//               <TextInput label="Faculty"></TextInput>
//             </Grid.Col>
//             <Grid.Col span={4}>
//               <TextInput label="Year / Course"></TextInput>
//             </Grid.Col>
//           </Grid>
//           <Grid>
//             <Grid.Col span={8}>
//               <TextInput label="Email"></TextInput>
//             </Grid.Col>
//             <Grid.Col span={4}>
//               <TextInput label="Phone Number"></TextInput>
//             </Grid.Col>
//           </Grid>
//           <Button>Confirm</Button>
//         </Stack>
//       </Modal>
//       <Stack spacing="xs">
//         <Paper
//           bg="#FFF"
//           mx="auto"
//           mt="xl"
//           mb="xs"
//           radius="md"
//           pb="xl"
//           style={{ maxWidth: 1000 }}
//         >
//           <Image
//             // src="https://static-cse.canva.com/blob/572029/removingbackgroundimages_Unsplash.jpeg"
//             src={defaultEventImage}
//             alt={"name here"}
//             width={1000}
//             height={250}
//             style={{ borderRadius: "16px" }}
//           />
//           <Stack ml={20} spacing="md">
//             <Group position="apart" spacing={0}>
//               <Group spacing={0}>
//                 <Avatar
//                   mt={-80}
//                   size={160}
//                   radius={80}
//                   style={{ border: "5px solid white" }}
//                   src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
//                 />
//                 <ActionIcon
//                   size="lg"
//                   mt={40}
//                   ml={-50}
//                   color="cyan"
//                   radius="xl"
//                   variant="filled"
//                 >
//                   <FaPen style={{ color: "white" }} />
//                 </ActionIcon>
//               </Group>
//               <Stack mr="xl" mt={20}>
//                 <Button
//                   onClick={() => setOpened(true)}
//                   variant="outline"
//                   color="dark"
//                   leftIcon={<FaPen />}
//                 >
//                   Edit Profile
//                 </Button>
//                 <Button leftIcon={<FaShare />}>Share Profile</Button>
//               </Stack>
//             </Group>
//             <Stack ml={10} mt={-20} spacing="md" align="flex-start">
//               <Group spacing="md">
//                 <Text fz={25} fw="bold">
//                   David Addams
//                 </Text>
//                 <Text fz={25} fw="bold" c="dimmed">
//                   22
//                 </Text>
//               </Group>
//               <Stack spacing={5}>
//                 <Text fz={15} fw={530}>
//                   Bio
//                 </Text>
//                 <Text fz={15}>
//                   My name is David Addams. I am a money collector and a trusted
//                   MLM agent.
//                 </Text>
//               </Stack>
//               <Group spacing="xl">
//                 <Text fz={15}>@d_addams01</Text>
//                 <BsDot />
//                 <Text fz={15} fw={530}>
//                   Software Engineering
//                 </Text>
//                 <BsDot />
//                 <Text fz={15} c="dimmed" fw={550}>
//                   Full-Time Student
//                 </Text>
//               </Group>
//             </Stack>
//           </Stack>
//         </Paper>
//         <Paper
//           bg="#FFF"
//           mx="auto"
//           mt="xs"
//           mb="xs"
//           py="xl"
//           pl={10}
//           radius="md"
//           pb="xl"
//           style={{ width: 1000 }}
//         >
//           <Stack ml={20}>
//             <Text fz={20} fw="bold">
//               About Me
//             </Text>
//             <Table ml={0}>
//               <tbody>
//                 <tr>
//                   <td style={{ width: 200 }}>
//                     <Text fz={15} fw={550}>
//                       Residential College
//                     </Text>
//                   </td>
//                   <td>
//                     <Text fz={15}>Kolej Tun Dr. Ismail</Text>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//             <Table ml={0}>
//               <tbody>
//                 <tr>
//                   <td style={{ width: 200 }}>
//                     <Text fz={15} fw={550}>
//                       Faculty
//                     </Text>
//                   </td>
//                   <td>
//                     <Text fz={15}>
//                       School of Computing, Faculty of Engineering
//                     </Text>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//             <Table ml={0}>
//               <tbody>
//                 <tr>
//                   <td style={{ width: 200 }}>
//                     <Text fz={15} fw={550}>
//                       Year / Course
//                     </Text>
//                   </td>
//                   <td>
//                     <Text fz={15}>3 / SECJH</Text>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//             <Table ml={0}>
//               <tbody>
//                 <tr>
//                   <td style={{ width: 200 }}>
//                     <Text fz={15} fw={550}>
//                       Hometown
//                     </Text>
//                   </td>
//                   <td>
//                     <Text fz={15}>Idaho, United States of America</Text>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//           </Stack>
//         </Paper>
//         <Paper
//           bg="#FFF"
//           mx="auto"
//           mt="xs"
//           mb={30}
//           py="xl"
//           pl={10}
//           radius="md"
//           pb="xl"
//           style={{ width: 1000 }}
//         >
//           <Stack ml={20}>
//             <Text fz={20} fw="bold" mb={10}>
//               Social
//             </Text>
//             <Stack ml={10}>
//               <Group spacing="xl">
//                 <BsFillTelephoneFill style={{ color: "#5CBC55" }} size={18} />
//                 <Text fz={15} fw={550}>
//                   {" "}
//                   +(60)13-2345457
//                 </Text>
//               </Group>
//               <Group spacing="xl">
//                 <FiMail style={{ color: "#E03131" }} size={18} />
//                 <Text fz={15} fw={550}>
//                   {" "}
//                   davidaddams01@gmail.com
//                 </Text>
//               </Group>
//               <Group spacing="xl">
//                 <SiInstagram style={{ color: "#D6336C" }} size={18} />
//                 <Text fz={15} fw={550}>
//                   {" "}
//                   @d_addams01
//                 </Text>
//               </Group>
//               <Group spacing="xl">
//                 <FaTwitter style={{ color: "#339AF0" }} size={18} />
//                 <Text fz={15} fw={550}>
//                   {" "}
//                   @d_addams01
//                 </Text>
//               </Group>
//             </Stack>
//           </Stack>
//         </Paper>
//       </Stack>
//     </>
//   );
// }

// export default ProfilePage;

// export { getServerSideProps };
