import {
  Menu,
  Group,
  TextInput,
  ActionIcon,
  Chip,
  Text,
  Stack,
  createStyles,
} from "@mantine/core";
import { useState } from "react";
import { MdOutlineFilterList, MdOutlineSearch } from "react-icons/md";

const useStyle = createStyles((theme) => ({
  Filter: {
    ".mantine-Chip-root": {
      width: "100%",
      textAlign: "center",
      ".mantine-Chip-label": {
        fontWeight: 400,
        width: "100%",
        border: "none",
      },
      "[data-checked]": {
        color: theme.colors.primary?.[0],
        fontWeight: 500,
      },
    },

    ".mantine-Menu-item": {
      background: theme.colors.pink?.[7],
      color: theme.colors.gray[0],
      textAlign: "center",
      marginTop: "10px",
      fontWeight: 500,
      "&:hover": {
        background: theme.colors.pink?.[8],
        "&:active": {
          background: theme.colors.pink?.[6],
        },
      },
    },
  },
}));

const EventFilter = () => {
  const { classes } = useStyle();
  const [search, setSearch] = useState("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <Group position="center">
      <TextInput
        onChange={(e) => {
          handleOnChange(e);
        }}
        variant="default"
        icon={<MdOutlineSearch size={20} />}
        placeholder="Search events here!"
        w="30vw"
      />
      <Menu
        position="bottom-end"
        closeOnClickOutside
        withArrow
        offset={5}
        arrowOffset={12}
      >
        <Menu.Target>
          <ActionIcon color="gray.0" variant="filled" size="lg">
            <MdOutlineFilterList color="grey" />
          </ActionIcon>
        </Menu.Target>
        <form onSubmit={() => {}}>
          <Menu.Dropdown className={classes.Filter}>
            <Menu.Label>
              <Text align="center" mb="xs">
                Order By
              </Text>
              <Chip.Group>
                <Stack align={"center"}>
                  <Chip color="primary.0" value="date: asc" radius="sm">
                    Upcoming Events
                  </Chip>
                  <Chip color="primary.0" value="2" radius="sm">
                    Latest Events
                  </Chip>
                  <Chip color="primary.0" value="3" radius="sm">
                    Old Events
                  </Chip>
                </Stack>
              </Chip.Group>
            </Menu.Label>
            <Menu.Item type="submit">Filter</Menu.Item>
          </Menu.Dropdown>
        </form>
      </Menu>
    </Group>
  );
};

export default EventFilter;
