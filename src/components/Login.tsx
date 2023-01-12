import {
  Group,
  Stack,
  Title,
  createStyles,
  Button,
  AppShell,
  MediaQuery,
} from "@mantine/core";
import Image from "next/image";
import { signIn } from "next-auth/react";
// import { useState } from "react";
// import Register from "./Register";
import { FaDiscord, FaGoogle } from "react-icons/fa";

const useStyle = createStyles((theme) => ({
  appShell: {
    background: theme.fn.linearGradient(90, "#760e38 60%", "#e2e3ea 40%"),
    display: "flex",
  },
  borderContainer: {
    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    border: "solid 5px #FFFFFF3B",
  },
}));

function Login() {
  const { classes } = useStyle();
  // const [opened, setOpened] = useState<boolean>(false);

  return (
    <MediaQuery query="(max-width: 1200px)" styles={{ display: "none" }}>
      <AppShell className={classes.appShell} padding="xl">
        {/* <Register opened={opened} setOpened={setOpened} /> */}
        <Group className={classes.borderContainer} spacing={0} noWrap>
          <Stack sx={{ width: "60%" }} align="center" spacing={"xl"}>
            <Title color="gray.0">STUDENT WELFARE SYSTEM</Title>
            <Image
              style={{
                padding: "10px",
                background: "white",
                borderRadius: "24px",
              }}
              src={"/utmlogo.svg"}
              alt={"UTM LOGO"}
              width="500"
              height="150"
            />
          </Stack>

          <Stack ml={"5vw"} sx={{ width: "30%" }}>
            <Title order={2} align="center" mb={"md"}>
              Sign In With
            </Title>
            <Button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              color="red.7"
              leftIcon={<FaGoogle size={"25px"} />}
            >
              Google
            </Button>
            <Button
              onClick={() => signIn("discord", { callbackUrl: "/" })}
              color="violet.7"
              leftIcon={<FaDiscord size={"25px"} />}
            >
              Discord
            </Button>
            {/* <TextInput label="Email address" />
          <PasswordInput label="Password" />
          <Checkbox label="Remember me" color="primary.0" />
          <Button color="primary.0">Sign In</Button> */}

            {/* <Group position="center" noWrap spacing={"xs"}>
            <Text>Don't have an account? </Text>

            <Anchor
              onClick={() => {
                setOpened(true);
              }}
              underline={false}
            >
              Sign Up
            </Anchor>
          </Group> */}
          </Stack>
        </Group>
      </AppShell>
    </MediaQuery>
  );
}

export default Login;
