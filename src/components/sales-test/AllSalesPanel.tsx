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
  import { SalesPost } from "@prisma/client";
  import Image from "next/image";
  import React, { useState, useEffect } from "react";
  import { defaultSalesImage } from "../../types/constant";
  import {
    getCreatedAt,
    getDaysLeft,
    getFormattedDate,
  } from "../../utils/dateHandler";
  import { useScrollPosition } from "../../utils/scrollPosition";
  import { LoadingNextPage } from "../Loading";
  import SalesDetailModal from "./SalesDetailModal";
  
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
    image: {
      boxShadow: `${theme.colors.gray?.[5]} 3px 3px, ${theme.colors.gray?.[6]} 6px 6px`,
      border: `${theme.colors.gray?.[4]} solid 4px`,
      borderRadius: "10px",
    },
  }));
  
  type Props = {
    sales: SalesPost[];
    fetchNextPage: any;
    hasNextPage: boolean | undefined;
    isFetchingNextPage: boolean;
  };

function AllSalesPanel({
    sales,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }: Props) {
    const { classes } = useStyle();
    const [opened, setOpened] = useState(false);
    const [detailSalesId, Sales] = useState<string>();
    const scrollPosition = useScrollPosition();
  
    const handleOnClick = (sales_id: string) => {
      setDetailSalesId(sales_id);
      setOpened(true);
    };
  
    useEffect(() => {
      if (scrollPosition > 90 && hasNextPage && !isFetchingNextPage)
        fetchNextPage();
    }, [scrollPosition, hasNextPage, isFetchingNextPage, fetchNextPage]);
  
    return (
      <Box mx="5vw">
        {sales?.map((sales, index) => {
          const { id, title, description, image, date, createdAt } = sales;
          const createdSince = getCreatedAt(createdAt);
          const daysLeft = getDaysLeft(date);
          const Index = index % 2 === 0;
          return (
            <div key={id}>
              {id === detailSalesId && (
                <SalesDetailModal
                  setOpened={setOpened}
                  opened={opened}
                  sales={sales}
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
                        src={image ? image : defaultSalesImage}
                        className={classes.image}
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
                        <Badge color="red">SALES ENDED</Badge>
                      )}
                    </div>
                  )}
                  <Stack
                    justify="space-between"
                    className={classes.customSize}
                    align={Index ? "flex-start" : "flex-end"}
                  >
                    <Stack className={classes.overWrappingText}>
                      <Group spacing="xs" position={Index ? "left" : "right"}>
                        <Title order={3}>{title}</Title>
                        <Text size="xs" color="gray.4" opacity="0.8">
                          - {createdSince} ago
                        </Text>
                      </Group>
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
                        src={image ? image : defaultSalesImage}
                        className={classes.image}
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
                        <Badge color="red">SALES ENDED</Badge>
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

export default AllSalesPanel;