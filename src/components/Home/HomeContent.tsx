import { Button, Group, Stack, createStyles, Text } from "@mantine/core";
import {} from "react-icons";

const useStyle = createStyles((theme) => ({
  buttonManager: {
    ".mantine-Button-root": {
      color: theme.colors.dark[5],
      background: theme.colors.background?.[0],
      "&:hover": {
        color: theme.colors.background?.[0],
        background: theme.colors.primary?.[2],
      },
    },
  },
}));

function HomeContent() {
  const { classes } = useStyle();
  return (
    <Stack className={classes.buttonManager} align="center">
      <Group>
        <Button>
          <Stack></Stack>
          <Text>Event</Text>
        </Button>
        <Button>Sales</Button>
        <Button>Lost & Found</Button>
      </Group>
      <Group>
        <Button>Complain</Button>
        <Button>News</Button>
        <Button>Survey</Button>
      </Group>
    </Stack>
  );
}

export default HomeContent;
