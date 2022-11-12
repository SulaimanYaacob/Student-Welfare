import { Carousel } from "@mantine/carousel";
import { Text, createStyles } from "@mantine/core";
import { Fade } from "react-awesome-reveal";
import React from "react";

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

  return (
    <Fade duration={3000}>
      <Carousel
        p={"xl"}
        classNames={classes}
        height={125}
        mx="auto"
        slideSize="100%"
        withIndicators
        loop
      >
        <Carousel.Slide>
          Sint exercitation laboris amet sit ad proident consequat. Cillum
          veniam consequat ad est Lorem enim adipisicing minim nulla incididunt
          ipsum. Ea occaecat ad culpa incididunt dolore aliquip velit nostrud
          magna. Laboris fugiat ullamco ipsum veniam eiusmod dolore id non
          commodo culpa elit officia nisi. Eu anim fugiat laboris quis duis
          labore sint magna sit reprehenderit adipisicing reprehenderit.
          Occaecat quis dolore ullamco ipsum culpa ipsum Lorem Lorem amet
          officia labore. Proident sit aliquip duis consequat do sunt magna in.
        </Carousel.Slide>
        <Carousel.Slide>
          Esse fugiat eiusmod mollit pariatur commodo ut reprehenderit sunt
          velit est est ad. Ut minim cillum esse in sunt voluptate ex ex quis
          laboris culpa voluptate et ut. Ullamco minim sint dolore quis culpa
          ex. Irure nisi ea tempor quis incididunt ut labore amet adipisicing.
          Magna ut irure deserunt ipsum dolor sint sit eiusmod cillum sint sit
          minim incididunt. Irure minim incididunt id nisi amet consequat. Velit
          est ad fugiat esse aute quis magna exercitation excepteur magna amet
          aliquip.
        </Carousel.Slide>
        <Carousel.Slide>
          Ullamco do consectetur proident voluptate nostrud qui ea adipisicing
          aute laborum tempor mollit anim voluptate. Excepteur ullamco non nulla
          veniam labore labore reprehenderit et sunt est adipisicing. Dolor
          exercitation incididunt irure voluptate adipisicing nostrud officia
          anim nostrud ex aute commodo. Veniam consectetur aliqua elit sunt est
          consequat quis excepteur magna incididunt occaecat in est est. Dolor
          minim ad ullamco eiusmod magna enim sunt voluptate tempor fugiat
          deserunt et.
        </Carousel.Slide>
      </Carousel>
    </Fade>
  );
}

export default EventCarousel;
