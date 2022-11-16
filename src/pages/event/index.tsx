import {
  Stack,
  Title,
  createStyles,
  Tabs,
  Divider,
  Text,
  Group,
  Button,
} from "@mantine/core";
import React from "react";
import getServerSideProps from "../../utils/protectedRoute";
import { allEvents } from "../../data/events";
import Image from "next/image";

const useStyle = createStyles((theme) => ({
  container: {
    width: "100%",
    color: theme.colors.background?.[0],
    ".mantine-Tabs-tab": {
      width: "10vw",
      color: theme.colors.background?.[0],
      "&:hover": {
        background: theme.colors.primary?.[0],
      },
      "&[data-active], &[data-active]:hover": {
        fontWeight: 500,
        color: theme.colors.secondary?.[0],
        background: theme.colors.primary?.[0],
        borderBottomColor: theme.colors.secondary?.[0],
        borderBottom: "solid 3px",
      },
    },
  },

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

function EventPage() {
  const { classes } = useStyle();
  return (
    <>
      <Stack className={classes.container}>
        <Title align="center">~We Create Wonderful Events~</Title>

        <Tabs
          variant="pills"
          defaultValue={"allEvent"}
          color="primary"
          radius={0}
        >
          <Tabs.List mb={"xl"}>
            <Tabs.Tab px="xl" ml={"auto"} value="allEvent">
              ALL EVENT
            </Tabs.Tab>
            <Tabs.Tab px="xl" mr={"auto"} value="myEvent">
              MY EVENT
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="allEvent">
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
          </Tabs.Panel>
          <Tabs.Panel value="myEvent">
            <Stack>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis quidem dicta in voluptatibus, veniam quod commodi odit,
              doloribus, aliquam quisquam voluptatum ratione corporis et
              cupiditate vero exercitationem enim. Nemo, et!
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  );
}

export default EventPage;

export { getServerSideProps };
