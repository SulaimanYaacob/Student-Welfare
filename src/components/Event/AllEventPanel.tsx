import {
  Divider,
  Group,
  Stack,
  Title,
  Text,
  Button,
  createStyles,
  Loader,
  Spoiler,
} from "@mantine/core";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { defaultEventImage } from "../../types/constant";
import { trpc } from "../../utils/trpc";
import EventDetailModal from "./EventDetailModal";

const useStyle = createStyles((theme) => ({
  customDivider: {
    width: "100%",
    position: "relative",
  },
  customSize: {
    width: "60%",
    height: "220px",
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
  overWrappingText: {
    wordBreak: "break-all",
  },
}));

function AllEventPanel() {
  const { classes } = useStyle();
  const [opened, setOpened] = useState(false);
  const [detailEventId, setDetailEventId] = useState<string>();
  const { data, isLoading } = trpc.eventPost.getAll.useQuery();

  const handleOnClick = (event_id: string) => {
    setDetailEventId(event_id);
    setOpened(true);
  };

  //TODO create a loading component for reusability
  if (isLoading) {
    return (
      <Group position="center" m="10vw">
        <Loader size={"xl"} variant="oval" color={"gold"} />
        <Title order={2} color={"gold"}>
          Loading Events
        </Title>
      </Group>
    );
  }

  return (
    //TODO May need to refactor this code in the future
    <>
      {data?.map(
        (
          { id, description, title, image, date, timeStart, timeEnd, venue },
          index
        ) => {
          return (
            <div key={id}>
              {id === detailEventId ? (
                <EventDetailModal
                  setOpened={setOpened}
                  opened={opened}
                  title={title}
                  description={description}
                  image={image}
                  venue={venue}
                  date={date}
                  timeStart={timeStart}
                  timeEnd={timeEnd}
                />
              ) : (
                <></>
              )}
              <Stack m={"xl"} spacing="xl">
                {index % 2 === 0 ? (
                  <>
                    <Stack className={classes.customDivider}>
                      <Text className={classes.diamondEdgeLeft}></Text>
                      <Divider size={"xl"} color={"white"} />
                    </Stack>
                    <Group spacing={"xl"} mx="5vw" noWrap>
                      <Image
                        src={image ? image : defaultEventImage}
                        alt={title}
                        width="340"
                        height="220"
                      />
                      <Stack
                        justify="space-between"
                        className={classes.customSize}
                      >
                        <Stack>
                          <Title className={classes.overWrappingText} order={3}>
                            {title}
                          </Title>
                          <Text className={classes.overWrappingText}>
                            {description
                              ? description?.length < 400
                                ? description
                                : `${description?.substring(0, 400)}...`
                              : "Description is undefined"}
                          </Text>
                        </Stack>
                        <Button
                          onClick={() => handleOnClick(id)}
                          color={"primary.2"}
                          sx={{ width: "200px" }}
                        >
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
                    <Group position="right" mx="5vw" spacing={"xl"} noWrap>
                      <Stack
                        justify="space-between"
                        className={classes.customSize}
                        align={"flex-end"}
                      >
                        <Stack>
                          <Title
                            align="end"
                            className={classes.overWrappingText}
                            order={3}
                          >
                            {title}
                          </Title>

                          <Text className={classes.overWrappingText}>
                            {description
                              ? description?.length < 400
                                ? description
                                : `${description?.substring(0, 400)}...`
                              : "Description is undefined"}
                          </Text>
                        </Stack>
                        <Button
                          onClick={() => handleOnClick(id)}
                          color={"primary.2"}
                          sx={{ width: "200px" }}
                        >
                          LEARN MORE
                        </Button>
                      </Stack>
                      <Image
                        src={image ? image : defaultEventImage}
                        alt={title}
                        width="340"
                        height="220"
                      />
                    </Group>
                  </>
                )}
              </Stack>
            </div>
          );
        }
      )}
    </>
  );
}

export default AllEventPanel;
