import {
  Divider,
  Group,
  Stack,
  Title,
  Text,
  Button,
  createStyles,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import { allEvents } from "../../data/events";

const useStyle = createStyles((theme) => ({
  customDivider: {
    width: "100%",
    position: "relative",
  },
  diamondEdgeLeft: {
    background: theme.colors.background?.[0],
    width: "25px",
    height: "25px",
    position: "absolute",
    top: "-10px",
    rotate: "45deg",
  },
  diamondEdgeRight: {
    background: theme.colors.background?.[0],
    width: "25px",
    height: "25px",
    position: "absolute",
    top: "-10px",
    right: "0",
    rotate: "45deg",
  },
}));

function AllEventPanel() {
  const { classes } = useStyle();

  return (
    <>
      {allEvents.map(({ id, description, title }, index) => {
        return (
          <Stack key={id} m={"xl"} spacing="xl">
            {index % 2 !== 0 ? (
              <>
                <Stack className={classes.customDivider}>
                  <Divider size={"xl"} color={"white"} />
                  <Text className={classes.diamondEdgeLeft}></Text>
                </Stack>
                <Group spacing={"xl"} noWrap>
                  <Image src={""} alt={""} width="300" height="150" />
                  <Stack>
                    <Title order={3}>{title}</Title>
                    <Text>{description}</Text>
                    <Button color={"primary.2"} sx={{ width: "200px" }}>
                      LEARN MORE
                    </Button>
                  </Stack>
                </Group>
              </>
            ) : (
              <>
                <Stack className={classes.customDivider}>
                  <Divider size={"xl"} color={"white"} />
                  <Text className={classes.diamondEdgeRight}></Text>
                </Stack>
                <Group position="right" spacing={"xl"} noWrap>
                  <Stack align={"flex-end"}>
                    <Title order={3}>{title}</Title>
                    <Text>{description}</Text>
                    <Button color={"primary.2"} sx={{ width: "200px" }}>
                      LEARN MORE
                    </Button>
                  </Stack>
                  <Image src={""} alt={""} width="300" height="150" />
                </Group>
              </>
            )}
          </Stack>
        );
      })}
    </>
  );
}

export default AllEventPanel;
