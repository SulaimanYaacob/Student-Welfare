import { Carousel } from "@mantine/carousel";
import { Center, createStyles, Stack, Text, Title } from "@mantine/core";
import { Fade } from "react-awesome-reveal";
import React from "react";
import { useSession } from "next-auth/react";

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
            <Title align="center" color="yellow.5" mx="xl">
              Event that passes 3 days after the date of conduct will be remove
              from the list
            </Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h="100%">
            <Title align="center" color="yellow.5" mx="xl">
              If you refresh when editing an event, it will redirect you to
              create page. (To prevent other's editing your events.)
            </Title>
          </Center>
        </Carousel.Slide>
        <Carousel.Slide>
          <Center h="100%">
            <Title align="center" color="yellow.5" mx="xl">
              Other than that, please enjoy browsing our website!
            </Title>
          </Center>
        </Carousel.Slide>
      </Carousel>
    </Fade>
  );
}

export default EventCarousel;
