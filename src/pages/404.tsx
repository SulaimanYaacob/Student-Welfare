import { Button, Stack, Text, Image, Title, Box } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function ErrorPage() {
  return (
    <Stack spacing={"xs"} h="100vh" align="center" justify="center">
      <Box sx={{ width: "50vw" }}>
        <Image radius="md" src="/404-Error.jpg" alt="Random unsplash image" />
      </Box>
      <Title order={2}>Oops...</Title>
      <Text>The page you were looking for is not available</Text>
      <Button mt="xl" color="primary.0" component={Link} href="/">
        Go back Home
      </Button>
    </Stack>
  );
}
