import {
  Text,
  TextInput,
  PasswordInput,
  Group,
  Stack,
  Title,
  Checkbox,
  createStyles,
  Button,
  AppShell,
  Anchor,
  Modal,
} from "@mantine/core";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useState } from "react";

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
  const [opened, setOpened] = useState(false);

  return (
    <AppShell className={classes.appShell} padding="xl">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* RegisterComponent Here */}
      </Modal>
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
          <Title order={2}>Login to your Account</Title>
          <TextInput label="Email address" />
          <PasswordInput label="Password" />
          <Checkbox label="Remember me" color="primary.0" />
          <Button color="primary.0">Sign In</Button>
          <Button
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/home" })
            }
            color="dark.5"
            leftIcon={<FcGoogle size={"25px"} />}
          >
            Continue With Google
          </Button>
          <Group position="center" noWrap spacing={"xs"}>
            <Text>Don't have an account? </Text>

            <Anchor
              onClick={() => {
                setOpened(true);
              }}
              underline={false}
            >
              Sign Up
            </Anchor>
          </Group>
        </Stack>
      </Group>
    </AppShell>
  );
}

export default Login;
