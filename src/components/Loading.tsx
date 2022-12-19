import { Group, Loader, Title } from "@mantine/core";
import React from "react";

function Loading() {
  return (
    <Group position="center" align="center" h="50vh">
      <Loader fill="1" size={"xl"} variant="oval" color={"gold"} />
      <Title order={2} color={"gold"}>
        Loading Events
      </Title>
    </Group>
  );
}

export default Loading;
