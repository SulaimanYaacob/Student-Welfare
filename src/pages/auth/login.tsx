import { type NextPage } from "next";
import Login from "../../components/Login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Skeleton } from "@mantine/core";

const LoginPage: NextPage = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (session) {
    push("/home");
  }
  return <Login />;
};

export default LoginPage;
