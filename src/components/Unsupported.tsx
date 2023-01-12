import { MediaQuery, AppShell, Stack, Title, Text } from "@mantine/core";
import React from "react";
import { MdMobileOff } from "react-icons/md";

function Unsupported() {
  return (
    <MediaQuery query="(min-width: 1200px)" styles={{ display: "none" }}>
      <AppShell sx={(theme) => ({ background: `${theme.colors.gray[4]}` })}>
        <Stack
          pos="absolute"
          top="25%"
          bottom="25%"
          right="15%"
          left="15%"
          spacing="xl"
          align="center"
        >
          <MdMobileOff size="125" />
          <Title align="center" maw="300px" order={3}>
            {"We can't fit everything in your screen."}
          </Title>
          <Text align="center">
            {"We're sorry to say that some devices are not compatible"}
          </Text>
        </Stack>
      </AppShell>
    </MediaQuery>
  );
}

export default Unsupported;
