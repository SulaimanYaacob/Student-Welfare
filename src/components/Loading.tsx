import { Group, Loader, Stack, Title } from "@mantine/core";
import React from "react";
import { RiEmotionSadLine } from "react-icons/ri";

export function Loading({ name }: { name: string }) {
  return (
    <Group position="center" align="center" h="50vh">
      <Loader fill="1" size={"xl"} variant="oval" color={"gold"} />
      <Title order={2} color={"gold"}>
        Loading {name}
      </Title>
    </Group>
  );
}

export function LoadingNextPage({
  getNextPage,
}: {
  getNextPage: boolean | undefined;
}) {
  return (
    <>
      {getNextPage ? (
        <Stack p="xl" align="center">
          <Loader color="gold" variant="bars" />
        </Stack>
      ) : (
        <Stack
          sx={{ borderTop: `solid 3px white` }}
          p="xl"
          w="100%"
          left="0"
          bg="primary.2"
          pos="absolute"
        >
          <Stack align="center">
            <RiEmotionSadLine color="pink" size="80" />
            <Title order={4} align="center" color="pink.2">
              There are no more events available
            </Title>
          </Stack>
        </Stack>
      )}
    </>
  );
}

export default Loading;
