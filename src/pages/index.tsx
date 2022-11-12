import { Button, Group } from "@mantine/core";
import { type NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Group position="center">
      <Button component="a" href="/login" radius={0}>
        {hello.data?.greeting}
      </Button>
    </Group>
  );
};

export default Home;
