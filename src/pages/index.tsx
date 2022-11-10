import { Button } from "@mantine/core";
import { type NextPage } from "next";
import Banner from "../components/Login/Banner";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Button component="a" href="/login">
        {hello.data?.greeting}
      </Button>
    </>
  );
};

export default Home;
