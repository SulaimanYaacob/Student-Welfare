import {
  Divider,
  Group,
  Stack,
  Title,
  Text,
  Button,
  createStyles,
  Badge,
  Box,
} from "@mantine/core";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useGetEvents from "../../hooks/useGetEvents";
import { defaultEventImage } from "../../types/constant";
import { getDaysLeft } from "../../utils/dateHandler";
import { useScrollPosition } from "../../utils/scrollPosition";
import { Loading, LoadingNextPage } from "../Loading";
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
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetEvents();
  const events = data?.pages.flatMap((item) => item.events) ?? [];
  const scrollPosition = useScrollPosition();

  const handleOnClick = (event_id: string) => {
    setDetailEventId(event_id);
    setOpened(true);
  };

  useEffect(() => {
    if (scrollPosition > 90 && hasNextPage && !isFetchingNextPage)
      fetchNextPage();
  }, [scrollPosition, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <Loading />;

  return (
    <Box mx="5vw">
      {/* Search Bar & Filters Here */}

      {events?.map((event, index) => {
        const { id, title, description, image, date } = event;
        const daysLeft = getDaysLeft(date);
        const Index = index % 2 === 0;
        return (
          <div key={id}>
            {id === detailEventId && (
              <EventDetailModal
                setOpened={setOpened}
                opened={opened}
                event={event}
              />
            )}
            <Stack my="xl" spacing="xl">
              <Stack className={classes.customDivider}>
                <Text
                  className={
                    Index ? classes.diamondEdgeLeft : classes.diamondEdgeRight
                  }
                />
                <Divider size={"xl"} color={"white"} />
              </Stack>
              <Group mx="xl" spacing={"xl"} noWrap position="center">
                {Index && (
                  <div
                    className={
                      Index ? classes.leftEStatus : classes.rightEStatus
                    }
                  >
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
                )}
                <Stack
                  justify="space-between"
                  className={classes.customSize}
                  align={Index ? "flex-start" : "flex-end"}
                >
                  <Stack className={classes.overWrappingText}>
                    <Title order={3} align={Index ? "start" : "end"}>
                      {title}
                    </Title>
                    <Text>
                      {description
                        ? description?.length < 350
                          ? description
                          : `${description?.substring(0, 350)}...`
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
                {!Index && (
                  <div
                    className={
                      Index ? classes.leftEStatus : classes.rightEStatus
                    }
                  >
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
                )}
              </Group>
            </Stack>
          </div>
        );
      })}
      <LoadingNextPage getNextPage={hasNextPage} />
    </Box>
  );
}

export default AllEventPanel;
