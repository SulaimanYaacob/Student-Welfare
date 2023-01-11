import { Carousel } from "@mantine/carousel";
import { Center, createStyles, Stack, Text, Title } from "@mantine/core";
import { Fade } from "react-awesome-reveal";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Group } from "@mantine/core";

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    color: "white",
    border: "solid 2px white",
    width: "75%",

    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

function EventCarousel() {
  const { classes } = useStyles();
  const { data: session } = useSession();

  return (
    <Fade duration={3000} triggerOnce>
      <Carousel
        p={"xl"}
        classNames={classes}
        height={125}
        mx="auto"
        slideSize="100%"
        withIndicators
      >
        <Carousel.Slide>
          <Stack>
            <Title color="yellow.5" align="center" order={2}>
              Hello, {session?.user?.name} 👋
            </Title>
            <Text color="yellow.5" weight={500} align="center" mx="xl" w="65vw">
              Thank you for visiting our website. We apologize for any
              inconvenience you may have encountered while browsing. Please be
              advised that our website is currently under construction and not
              all features and pages may be available at this time.
            </Text>
          </Stack>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h="100%">
            <Stack align="center">
              <Title order={2} color="yellow.5">
                Developed By
              </Title>
              <Group spacing="xl">
                <Text
                  color="cyan"
                  component={Link}
                  href={`/profile/clcrug4c30000vc2wfvvgbj71`}
                >
                  Sulaiman
                </Text>
                <Text
                  color="cyan"
                  component={Link}
                  href="/profile/clb4owhne0000sstksx7lgw3y"
                >
                  Rizdwan
                </Text>
                <Text
                  color="cyan"
                  component={Link}
                  href="/profile/clcrupczv0002js089249209u"
                >
                  Eddie
                </Text>
              </Group>
            </Stack>
          </Center>
        </Carousel.Slide>
      </Carousel>
    </Fade>
  );
}

export default EventCarousel;
