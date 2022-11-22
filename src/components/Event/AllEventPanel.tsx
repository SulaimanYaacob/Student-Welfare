import {
  Divider,
  Group,
  Stack,
  Title,
  Text,
  Button,
  createStyles,
  Loader,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import { trpc } from "../../utils/trpc";

const useStyle = createStyles((theme) => ({
  customDivider: {
    width: "100%",
    position: "relative",
  },
  customWidth: {
    width: "60%",
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
  const defaultImage =
    "https://t4.ftcdn.net/jpg/03/85/61/45/360_F_385614508_K1aFSB0lhI17ZaW8lsNLQeP09xNA43gF.jpg";
  const { data, isLoading } = trpc.eventPost.getAll.useQuery();
  const { classes } = useStyle();

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
    <>
      {data?.map(({ id, description, title, image }, index) => {
        return (
          <Stack key={id} m={"xl"} spacing="xl">
            {index % 2 === 0 ? (
              <>
                <Stack className={classes.customDivider}>
                  <Text className={classes.diamondEdgeLeft}></Text>
                  <Divider size={"xl"} color={"white"} />
                </Stack>
                <Group spacing={"xl"} noWrap>
                  <Image
                    src={image ? image : defaultImage}
                    alt={title}
                    width="340"
                    height="180"
                  />
                  <Stack className={classes.customWidth}>
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
                  <Stack className={classes.customWidth} align={"flex-end"}>
                    <Title order={3}>{title}</Title>
                    <Text>{description}</Text>
                    <Button color={"primary.2"} sx={{ width: "200px" }}>
                      LEARN MORE
                    </Button>
                  </Stack>
                  <Image
                    src={image ? image : defaultImage}
                    alt={title}
                    width="340"
                    height="180"
                  />
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
