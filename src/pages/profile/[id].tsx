import {
  Text,
  Modal,
  Stack,
  TextInput,
  Grid,
  Button,
  Paper,
  Group,
  Avatar,
  Table,
  Center,
  Title,
  Divider,
  NumberInput,
  Select,
  CopyButton,
} from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsDot, BsFillTelephoneFill } from "react-icons/bs";
import { FaCheck, FaPen, FaRegCopy } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  defaultBackgroundImage,
  defaultEventImage,
} from "../../utils/constant";
import getServerSideProps from "../../utils/protectedRoute";
import { trpc } from "../../utils/trpc";
import Image from "next/image";
import type { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Loading from "../../components/Loading";
import Link from "next/link";
import useUpdateUser from "../../hooks/useUpdateUser";
import { allColleges } from "../../data/college";
import { allFaculties } from "../../data/faculty";
import { allCourses } from "../../data/course";

const UserProfile = () => {
  const {
    query: { id },
  } = useRouter();
  const [opened, setOpened] = useState(false);
  const { data: session } = useSession();
  const { data: userData } = trpc.userRouter.getUserById.useQuery({
    userId: id as string,
  });

  const { setValues, submit, getInputProps } = useUpdateUser();

  useEffect(() => {
    if (userData) {
      setValues({
        name: userData.name || undefined,
        age: userData.age || undefined,
        bio: userData.bio || undefined,
        studyMode: userData.studyMode || "FULLTIME",
        college: userData.college || undefined,
        course: userData.course || undefined,
        faculty: userData.faculty || undefined,
        phoneNo: userData.phoneNo || undefined,
        image: userData.image || undefined,
        backgroundImage: userData.backgroundImage || undefined,
      });
    }
  }, [setValues, userData]);

  if (!userData)
    return (
      <Center pos="absolute" right="25%" left="25%" top="25%" bottom="25%">
        <Loading name={"Profile"} />
      </Center>
    );

  const {
    age,
    bio,
    college,
    course,
    email,
    faculty,
    image,
    name,
    phoneNo,
    role,
    studyMode,
    backgroundImage,
    id: userProfileId,
  } = userData as User;

  return (
    <>
      <title>{name} Profile</title>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Edit Profile"
        size="50%"
        centered
      >
        <form onSubmit={submit()}>
          <Stack>
            <Grid>
              <Grid.Col span={8}>
                <TextInput label="Name" {...getInputProps("name")}></TextInput>
              </Grid.Col>
              <Grid.Col span={4}>
                <NumberInput label="Age" {...getInputProps("age")} />
              </Grid.Col>
            </Grid>
            <Select
              searchable
              label="Residential College"
              {...getInputProps("college")}
              data={allColleges.map(({ college }) => ({
                label: college,
                value: college,
              }))}
            />
            <Grid>
              <Grid.Col span={6}>
                <Select
                  searchable
                  label="Faculty"
                  {...getInputProps("faculty")}
                  data={allFaculties.map(({ faculty }) => ({
                    label: faculty,
                    value: faculty,
                  }))}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Select
                  searchable
                  label="Course"
                  {...getInputProps("course")}
                  data={allCourses.map(({ course }) => ({
                    label: course,
                    value: course,
                  }))}
                />
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span={6}>
                <Select
                  label="Study Mode"
                  data={[
                    { label: "Full-Time", value: "FULLTIME" },
                    { label: "Part-Time", value: "PARTTIME" },
                  ]}
                  {...getInputProps("studyMode")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  label="Phone Number"
                  {...getInputProps("phoneNo")}
                ></TextInput>
              </Grid.Col>
            </Grid>
            <Button type="submit" color="primary.0">
              Update Profile
            </Button>
          </Stack>
        </form>
      </Modal>
      <Stack spacing="xl">
        <Paper mx="auto" pb="xl" radius="md" w="1000px">
          <Image
            src={backgroundImage ? backgroundImage : defaultBackgroundImage}
            alt={"name here"}
            width={1000}
            height={250}
          />
          <Stack mx="lg" spacing="md">
            <Group position="apart" spacing={0} mt={-80} mb="xs" align="end">
              <Group spacing={0}>
                <Avatar
                  size={150}
                  radius={100}
                  sx={{ border: "3px solid white" }}
                  src={image ? image : defaultEventImage}
                />
              </Group>
              {session?.user?.id === userProfileId && (
                <Group mt="xl">
                  <Button
                    onClick={() => setOpened(true)}
                    variant="outline"
                    color="dark"
                    leftIcon={<FaPen />}
                  >
                    Edit Profile
                  </Button>
                  <CopyButton value={window.location.href}>
                    {({ copy, copied }) => (
                      <Button
                        onClick={copy}
                        color={copied ? "teal" : "primary.0"}
                        leftIcon={copied ? <FaCheck /> : <FaRegCopy />}
                      >
                        {copied ? "URL Copied" : "Copy Profile URL"}
                      </Button>
                    )}
                  </CopyButton>
                </Group>
              )}
            </Group>
            <Title maw="500px" order={4}>
              {name ? `${name}` + `${age ? ` - ${age}` : ""}` : "Undefined"}
            </Title>
            <Divider />
            <Stack spacing="md" align="center">
              <Stack spacing={"xs"}>
                <Text fw={500} align="center">
                  About me
                </Text>
                <Text
                  sx={{ border: "1px solid black" }}
                  maw="50vw"
                  mah="30vh"
                  p="md"
                  my="md"
                >
                  {id === "clb4hl1uw0000vcgccfm5492s" ? (
                    <Stack align="center">
                      <Image
                        alt="About me"
                        src={"/Totally_not_a_Rickroll_QR_Code.png"}
                        width={150}
                        height={150}
                      />
                      <Text>{"Here's a video introduction of me"}</Text>
                    </Stack>
                  ) : bio ? (
                    bio
                  ) : (
                    "I got nothing to share"
                  )}
                </Text>
              </Stack>
              <Group spacing="xl">
                <Text fw="500">
                  {role === "DEVELOPER" ? (
                    <Text color="cyan">Developer</Text>
                  ) : (
                    role
                  )}
                </Text>
                <BsDot />
                <Text fw="500" c="dimmed">
                  {studyMode === "FULLTIME" ? (
                    <Text>Full-Time</Text>
                  ) : (
                    <Text>Part-Time</Text>
                  )}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Paper>
        <Paper mx="auto" py="xl" radius="md" w="1000px">
          <Stack mx="xl">
            <Title order={3}>Academic Info</Title>
            <Divider />
            <Table>
              <tbody>
                <tr>
                  <td style={{ width: 200 }}>
                    <Text fw="500">Residential College</Text>
                  </td>
                  <td>
                    <Text>{college}</Text>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td style={{ width: 200 }}>
                    <Text fw="500">Faculty</Text>
                  </td>
                  <td>
                    <Text>{faculty}</Text>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td style={{ width: 200 }}>
                    <Text fw="500">Course</Text>
                  </td>
                  <td>
                    <Text>{course}</Text>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Stack>
        </Paper>
        <Paper mx="auto" py="xl" radius="md" w="1000px">
          <Stack mx="xl">
            <Title order={3}>Social</Title>
            <Divider />
            <Stack ml={10}>
              <Group spacing="xl">
                <FiMail style={{ color: "red" }} size={18} />
                <Text fw="500">{email}</Text>
              </Group>
              <Group spacing="xl">
                <BsFillTelephoneFill color="royalblue" size={18} />
                <Text fw="500">
                  {phoneNo ? phoneNo : "prefer not to share"}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};

export default UserProfile;

export { getServerSideProps };
