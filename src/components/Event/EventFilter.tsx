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
import { Dispatch, SetStateAction } from "react";
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

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const EventFilter = ({ setSearch, search }: Props) => {
  const { classes } = useStyle();

  return (
    <Group position="center">
      <TextInput
        onChange={(e) => {
          setSearch(e.currentTarget.value);
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
        arrowOffset={13}
      >
        <Menu.Target>
          <ActionIcon color="gray.0" variant="filled" size="lg">
            <MdOutlineFilterList color="grey" size={20} />
          </ActionIcon>
        </Menu.Target>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Menu.Dropdown className={classes.Filter}>
            <Menu.Label>
              <Text align="center" mb="xs">
                Order events by
              </Text>
              <Chip.Group>
                <Stack align={"center"}>
                  <Chip color="primary.0" value="date: asc" radius="sm">
                    Upcoming
                  </Chip>
                  <Chip color="primary.0" value="2" radius="sm">
                    Latest
                  </Chip>
                  <Chip color="primary.0" value="3" radius="sm">
                    Old
                  </Chip>
                </Stack>
              </Chip.Group>
            </Menu.Label>
            <Menu.Item type="submit">Sort</Menu.Item>
          </Menu.Dropdown>
        </form>
      </Menu>
    </Group>
  );
};

export default EventFilter;
