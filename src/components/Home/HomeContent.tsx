import { Button, Group, Stack, createStyles, Text } from "@mantine/core";
import {
  TbConfetti,
  TbPremiumRights,
  TbSearch,
  TbNews,
  TbReport,
  TbWriting,
} from "react-icons/tb";
import { Slide } from "react-awesome-reveal";

const useStyle = createStyles((theme) => ({
  buttonManager: {
    ".mantine-Button-root": {
      width: "225px",
      height: "175px",
      color: theme.colors.dark[5],
      background: theme.colors.gray?.[0],
      border: "solid 3px black",
      fontWeight: 700,
      "&:hover": {
        border: "solid 5px gold",
        color: theme.colors.background?.[0],
        background: theme.colors.secondary?.[0],
      },
    },
  },
}));

function HomeContent() {
  const { classes } = useStyle();
  return (
    <Stack
      mt={"xl"}
      spacing={"xl"}
      className={classes.buttonManager}
      align="center"
    >
      <Slide direction="left">
        <Group spacing={"xl"}>
          <Button component="a" href="/event">
            <Stack spacing={"xs"} align={"center"}>
              <TbConfetti size={"100px"} />
              <Text>Event</Text>
            </Stack>
          </Button>
          <Button>
            <Stack spacing={"xs"} align={"center"}>
              <TbPremiumRights size={"100px"} />
              <Text>Sales</Text>
            </Stack>
          </Button>
          <Button>
            <Stack spacing={"xs"} align={"center"}>
              <TbSearch size={"100px"} />
              <Text>Lost & Found</Text>
            </Stack>
          </Button>
        </Group>
      </Slide>

      <Slide direction="right" cascade>
        <Group spacing={"xl"}>
          <Button>
            <Stack spacing={"xs"} align={"center"}>
              <TbReport size={"100px"} />
              <Text>Complain</Text>
            </Stack>
          </Button>
          <Button>
            <Stack spacing={"xs"} align={"center"}>
              <TbNews size={"100px"} />
              <Text>News</Text>
            </Stack>
          </Button>
          <Button>
            <Stack spacing={"xs"} align={"center"}>
              <TbWriting size={"100px"} />
              <Text>Survey</Text>
            </Stack>
          </Button>
        </Group>
      </Slide>
    </Stack>
  );
}

export default HomeContent;
