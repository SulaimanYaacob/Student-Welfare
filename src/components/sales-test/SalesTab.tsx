import { Affix, Button, Stack, Tabs, Transition, Title } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { TbArrowUp, TbQuestionMark } from "react-icons/tb";
import useGetEvents from "../../hooks/useGetEvents";
import Loading from "../Loading";
import AllSalesPanel from "./AllSalesPanel";
import MySalesPanel from "./MySalesPanel";
import SalesFilter from "./SalesFilter";

function SalesTab(){
    const [scroll, scrollTo] = useWindowScroll();
        const {
    //sales,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    setOrder,
    setSearch,
    fetchNextPage,
  } = useGetEvents();
    return (
    <Tabs variant="pills" defaultValue={"allSales"} color="black" radius={0}>
      <Tabs.List mb={"xl"}>
        <Tabs.Tab px="xl" ml={"auto"} value="allSales">
          ALL SALES
        </Tabs.Tab>
        <Tabs.Tab px="xl" mr={"auto"} value="mySales">
          MY SALES
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="allSales">
        {/* <SalesFilter setSearch={setSearch} setOrder={setOrder} /> */}
        {/* {isLoading ? (
          <Loading />
        ) : sales.length ? (
          <AllSalesPanel
            sales={sales}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
          />
        ) : (
          <Stack spacing="xl" h="60vh" justify="center" align="center">
            <TbQuestionMark size={250} color="pink" />
            <Title order={2} color="pink.2">
              No sales found
            </Title>
          </Stack>
        )} */}
      </Tabs.Panel>
      <Tabs.Panel value="mySales">
        <MySalesPanel />
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
      </Tabs>
    );
}

export default SalesTab;