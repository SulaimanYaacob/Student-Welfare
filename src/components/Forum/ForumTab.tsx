import { Affix, Button, Grid, Modal, ScrollArea, Stack, Tabs, Text, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React, { useState } from "react";
import { TbArrowUp, TbPlus } from "react-icons/tb";
import { BsClock, BsGraphUp, BsSortDownAlt } from "react-icons/bs";
import CreateForum from "./CreateForum";
import NewForumPanel from "./NewForumPanel";
import TrendingForumPanel from "./TrendingForumPanel";
import CategoryForumPanel from "./CategoryForumPanel";
import getServerSideProps from "../../utils/protectedRoute";

function ForumTab() {
    const [scroll, scrollTo] = useWindowScroll();
    const [opened, setOpened] = useState(false);
    
    return (
        <Grid grow>
            <Grid.Col span={7}>
                <ScrollArea style={{height: 400}}>
                    <Tabs variant="pills" defaultValue={"newForum"} radius={25}>
                        <Tabs.List position="center" mb={"xl"}>
                            <Tabs.Tab mx={"xl"} value="newForum">
                                <BsClock/> NEW
                            </Tabs.Tab>
                            <Tabs.Tab mx={"xl"} value="trendingForum">
                                <BsGraphUp/> TRENDING
                            </Tabs.Tab>
                            <Tabs.Tab mx={"xl"} value="categoryForum">
                                <BsSortDownAlt/> CATEGORY
                            </Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="newForum">
                            <NewForumPanel/>
                        </Tabs.Panel>
                        <Tabs.Panel value="trendingForum">
                            <TrendingForumPanel/>
                        </Tabs.Panel>
                        <Tabs.Panel value="categoryForum">
                            <CategoryForumPanel/>
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
                </ScrollArea>
            </Grid.Col>
            <Grid.Col span="auto">
                <Modal centered
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="New Topic"
                >
                    <CreateForum/>
                </Modal>
                <Stack sx={() => ({height: 300 })} mx={"xl"}>
                    <Button
                        color={"cyan.7"}
                        leftIcon={<TbPlus size={16} />}
                        onClick={() => setOpened(true)}
                    >
                        START NEW TOPICS
                    </Button>
                    <Text ta="center">
                        PERSONAL NAVIGATOR
                    </Text>
                    <Button variant="subtle">
                        My Questions
                    </Button>
                    <Button variant="subtle">
                        My Answers
                    </Button>
                    <Button variant="subtle">
                        My Likes
                    </Button>
                </Stack>
            </Grid.Col>
        </Grid>
    );
}

export default ForumTab;
export {getServerSideProps};