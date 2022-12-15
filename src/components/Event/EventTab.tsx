import {
  Affix,
  Button,
  Tabs,
  Transition,
  createStyles,
  ActionIcon,
  HoverCard,
  Text,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";
import { TbArrowUp, TbPlus } from "react-icons/tb";
import AllEventPanel from "./AllEventPanel";
import MyEventPanel from "./MyEventPanel";

const useStyle = createStyles((theme) => ({
  createButton: {
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
    },
  },

  dropdown: {
    border: `3px solid ${theme.colors.green?.[5]}`,
  },
}));

function EventTab() {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyle();

  return (
    <Tabs variant="pills" defaultValue={"allEvent"} color="primary" radius={0}>
      <Tabs.List mb={"xl"}>
        <Tabs.Tab px="xl" ml={"auto"} value="allEvent">
          ALL EVENT
        </Tabs.Tab>
        <Tabs.Tab px="xl" mr={"auto"} value="myEvent">
          MY EVENT
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="allEvent">
        <AllEventPanel />
      </Tabs.Panel>
      <Tabs.Panel value="myEvent">
        <MyEventPanel />
      </Tabs.Panel>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 500}>
          {(transitionStyles) => (
            <Button
              color={"secondary.1"}
              leftIcon={<TbArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>

      <Affix
        className={classes.createButton}
        position={{ bottom: 20, left: 20 }}
      >
        <HoverCard position="right" withArrow>
          <HoverCard.Target>
            <ActionIcon
              component="a"
              href="/event/create"
              variant="filled"
              radius={"xl"}
              size="xl"
              color={"green"}
            >
              <TbPlus size={"25"} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown className={classes.dropdown}>
            <Text color={"green.5"} weight="bolder">
              Create your event!
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Affix>
    </Tabs>
  );
}

export default EventTab;
