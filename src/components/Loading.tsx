import { Group, Loader, Title } from "@mantine/core";
import React from "react";

function Loading() {
  return (
    <Group position="center" m="10vw">
      <Loader size={"xl"} variant="oval" color={"gold"} />
      <Title order={2} color={"gold"}>
        Loading Events
      </Title>
    </Group>
  );
}

export default Loading;
