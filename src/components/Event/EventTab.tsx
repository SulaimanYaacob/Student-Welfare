import { Tabs } from "@mantine/core";
import React from "react";
import AllEventPanel from "./AllEventPanel";
import MyEventPanel from "./MyEventPanel";

function EventTab() {
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
    </Tabs>
  );
}

export default EventTab;
