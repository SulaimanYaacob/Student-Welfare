import { Box } from "@mantine/core";
import { type NextPage } from "next";
import Banner from "../components/Login";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  console.log(hello.data);

  return <Banner />;
};

export default Home;
