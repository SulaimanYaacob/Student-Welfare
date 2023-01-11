import {
  Text,
  Stack,
  Button,
  Paper,
  Group,
  Avatar,
  Table,
  Center,
  Title,
  Divider,
  CopyButton,
} from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
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
import { useSession } from "next-auth/react";
import Loading from "../../components/Loading";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import ImageCropModal from "../../components/Profile/ImageCropModal";

const UserProfile = () => {
  const [openedImageEdit, setOpenedImageEdit] = useState(false);
  const [opened, setOpened] = useState(false);

  const {
    query: { id },
  } = useRouter();
  const { data: session } = useSession();
  const { data: userData, isFetching } = trpc.userRouter.getUserById.useQuery({
    userId: id as string,
  });

  return (
    <>
      {userData ? (
        <div>
          <title>{userData.name} Profile</title>
          <ImageCropModal
            title="Edit Image"
            opened={openedImageEdit}
            setOpened={setOpenedImageEdit}
            userData={userData}
          />
          <EditProfileModal
            userData={userData}
            setOpened={setOpened}
            opened={opened}
          />
          <Stack spacing="xl">
            <Paper mx="auto" pb="xl" radius="md" w="1000px">
              <Image
                src={
                  userData.backgroundImage
                    ? userData.backgroundImage
                    : defaultBackgroundImage
                }
                alt={"name here"}
                width={1000}
                height={250}
              />
              <Stack mx="lg" spacing="md">
                <Group
                  position="apart"
                  spacing={0}
                  mt={-80}
                  mb="xs"
                  align="end"
                >
                  <Avatar
                    onClick={() =>
                      session?.user?.id === userData.id &&
                      setOpenedImageEdit(true)
                    }
                    size={150}
                    sx={{
                      border: "4px solid white",
                      cursor: `${
                        session?.user?.id === userData.id ? "pointer" : "normal"
                      }`,
                    }}
                    src={userData.image ? userData.image : defaultEventImage}
                  />
                  {session?.user?.id === userData.id && (
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
                  {userData.name
                    ? `${userData.name}` +
                      `${userData.age ? ` - ${userData.age}` : ""}`
                    : "Undefined"}
                </Title>
                <Divider />
                <Stack spacing="md" align="center">
                  <Stack spacing={"xs"}>
                    <Text fw={500} align="center">
                      About me
                    </Text>
                    <Text
                      sx={{ border: "1px solid black" }}
                      align="center"
                      maw="35vw"
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
                          <Text>{"Here's a development video"}</Text>
                        </Stack>
                      ) : userData.bio ? (
                        userData.bio
                      ) : (
                        "I got nothing to share"
                      )}
                    </Text>
                  </Stack>
                  <Group spacing="xl">
                    <Text fw="500">
                      {userData.role === "DEVELOPER" ? (
                        <Text color="cyan">Developer</Text>
                      ) : (
                        userData.role
                      )}
                    </Text>
                    <BsDot />
                    <Text fw="500" c="dimmed">
                      {userData.studyMode === "FULLTIME" ? (
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
                        <Text>{userData.college}</Text>
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
                        <Text>{userData.faculty}</Text>
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
                        <Text>{userData.course}</Text>
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
                    <Text fw="500">{userData.email}</Text>
                  </Group>
                  <Group spacing="xl">
                    <BsFillTelephoneFill color="royalblue" size={18} />
                    <Text fw="500">
                      {userData.phoneNo
                        ? userData.phoneNo
                        : "prefer not to share"}
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </div>
      ) : isFetching ? (
        <Center pos="absolute" right="25%" left="25%" top="25%" bottom="25%">
          <Loading name={"Profile"} />
        </Center>
      ) : (
        <Center h="100%">
          <Title color="pink.2">No Profile Found!</Title>
        </Center>
      )}
    </>
  );
};

export default UserProfile;

export { getServerSideProps };
