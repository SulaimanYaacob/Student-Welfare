import {
  Divider,
  Group,
  Stack,
  Title,
  Text,
  Button,
  createStyles,
  Badge,
} from "@mantine/core";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { defaultEventImage } from "../../types/constant";
import { getDaysLeft } from "../../utils/dateHandler";
import { trpc } from "../../utils/trpc";
import Loading from "../Loading";
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
  leftEStatus: {
    position: "relative",
    width: "340",
    height: "220",
    div: {
      position: "absolute",
      right: 0,
      bottom: 0,
      margin: "10px",
    },
  },
  rightEStatus: {
    position: "relative",
    width: "340",
    height: "220",
    div: {
      position: "absolute",
      left: 0,
      bottom: 0,
      margin: "10px",
    },
  },
}));

function AllEventPanel() {
  const { classes } = useStyle();
  const [opened, setOpened] = useState(false);
  const [detailEventId, setDetailEventId] = useState<string>();
  const { data, isLoading, isRefetching, refetch } =
    trpc.eventPost.getAll.useQuery();

  const handleOnClick = (event_id: string) => {
    setDetailEventId(event_id);
    setOpened(true);
  };

  if (isLoading) return <Loading />;

  //TODO refactor modal like myEventPanel
  return (
    //TODO May need to refactor this code in the future to prevent performance issue
    <>
      {data?.map(
        (
          { id, description, title, image, date, timeStart, timeEnd, venue },
          index
        ) => {
          const daysLeft = getDaysLeft(date);
          return (
            <div key={id}>
              {id === detailEventId && (
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
              )}
              <Stack m={"xl"} spacing="xl">
                {index % 2 === 0 ? (
                  <>
                    <Stack className={classes.customDivider}>
                      <Text className={classes.diamondEdgeLeft}></Text>
                      <Divider size={"xl"} color={"white"} />
                    </Stack>
                    <Group spacing={"xl"} mx="5vw" noWrap>
                      <div className={classes.leftEStatus}>
                        <Image
                          src={image ? image : defaultEventImage}
                          alt={title}
                          width="340"
                          height="220"
                        />
                        {daysLeft >= 0 ? (
                          daysLeft === 0 ? (
                            <Badge color="teal">LIVE</Badge>
                          ) : (
                            <Badge color="indigo">{daysLeft} Days Left</Badge>
                          )
                        ) : (
                          <Badge color="red">EVENT ENDED</Badge>
                        )}
                      </div>
                      <Stack
                        justify="space-between"
                        className={classes.customSize}
                      >
                        <Stack className={classes.overWrappingText}>
                          <Title order={3}>{title}</Title>
                          <Text>
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
                        <Stack className={classes.overWrappingText}>
                          <Title align="end" order={3}>
                            {title}
                          </Title>

                          <Text>
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
                      <div className={classes.rightEStatus}>
                        <Image
                          src={image ? image : defaultEventImage}
                          alt={title}
                          width="340"
                          height="220"
                        />
                        {daysLeft >= 0 ? (
                          daysLeft === 0 ? (
                            <Badge color="teal">LIVE</Badge>
                          ) : (
                            <Badge color="indigo">{daysLeft} Days Left</Badge>
                          )
                        ) : (
                          <Badge color="red">EVENT ENDED</Badge>
                        )}
                      </div>
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
