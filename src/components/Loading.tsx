import { Group, Loader, Stack, Title } from "@mantine/core";
import React from "react";
import { RiEmotionSadLine } from "react-icons/ri";

export function Loading() {
  return (
    <Group position="center" align="center" h="50vh">
      <Loader fill="1" size={"xl"} variant="oval" color={"gold"} />
      <Title order={2} color={"gold"}>
        Loading Events
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
          bg="primary.2"
          p="xl"
          pos="absolute"
          left="0"
          w="100%"
        >
          <Stack align="center">
            <RiEmotionSadLine color="pink" size="135" />
            <Title order={3} align="center" color="pink.2">
              There are no more events available
            </Title>
          </Stack>
        </Stack>
      )}
    </>
  );
}

export default Loading;
