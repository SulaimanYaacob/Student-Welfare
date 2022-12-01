import Login from "../../components/Login";
import { getSession, GetSessionParams } from "next-auth/react";

const LoginPage = () => {
  return (
    <>
      <title>Login Page</title>
      <Login />
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
