import Login from "../../components/Login";
import type { GetSessionParams } from "next-auth/react";
import { getSession } from "next-auth/react";
import Unsupported from "../../components/Unsupported";
import { Paper } from "@mantine/core";

const LoginPage = () => {
  return (
    <>
      <title>Login Page</title>
      <Login />
      <Unsupported />
    </>
  );
};

export default LoginPage;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
