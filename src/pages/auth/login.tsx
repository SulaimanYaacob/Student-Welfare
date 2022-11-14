import { type NextPage } from "next";
import Login from "../../components/Login";
import { trpc } from "../../utils/trpc";

const LoginPage: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  console.log(hello.data);

  return <Login />;
};

export default LoginPage;
