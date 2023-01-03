import { Affix, Button, Stack, Tabs, Transition, Title } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { TbArrowUp, TbQuestionMark } from "react-icons/tb";
import useGetEvents from "../../hooks/useGetEvents";
import Loading from "../Loading";
import AllEventPanel from "./AllEventPanel";
import EventFilter from "./EventFilter";
import MyEventPanel from "./MyEventPanel";

// const useStyle = createStyles((theme) => ({
//   createButton: {
//     opacity: "0.5",
//     "&:hover": {
//       opacity: "1",
//     },
//   },

//   dropdown: {
//     border: `3px solid ${theme.colors.green?.[5]}`,
//   },

// }));

function EventTab() {
  const [scroll, scrollTo] = useWindowScroll();
  const {
    events,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    setOrder,
    setSearch,
    fetchNextPage,
  } = useGetEvents();

  //TODO ? Maybe remove this component and put it all in a event page.
  return (
    <Tabs variant="pills" defaultValue={"allEvent"} color="black" radius={0}>
      <Tabs.List mb={"xl"}>
        <Tabs.Tab px="xl" ml={"auto"} value="allEvent">
          ALL EVENT
        </Tabs.Tab>
        <Tabs.Tab px="xl" mr={"auto"} value="myEvent">
          MY EVENT
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="allEvent">
        <EventFilter setSearch={setSearch} setOrder={setOrder} />
        {isLoading ? (
          <Loading />
        ) : events.length ? (
          <AllEventPanel
            events={events}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
          />
        ) : (
          <Stack spacing="xl" h="60vh" justify="center" align="center">
            <TbQuestionMark size={250} color="pink" />
            <Title order={2} color="pink.2">
              No events found
            </Title>
          </Stack>
        )}
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

      {/* <Affix
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
      </Affix> */}
    </Tabs>
  );
}

export default EventTab;
