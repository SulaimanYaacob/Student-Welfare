import {
  Affix,
  Button,
  ScrollArea,
  Stack,
  Transition,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";
import { TbArrowUp } from "react-icons/tb";
import ForumPanel from "./ForumPanel";

function ForumTab() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Stack align="center" style={{minWidth: 1000}}>
      <ScrollArea style={{ height: 390 }}>
        <ForumPanel />
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
        </ScrollArea>
    </Stack>
  );
}

export default ForumTab;
