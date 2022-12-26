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
import { orderBy } from "../../hooks/useGetEvents";
import { useState } from "react";

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
  setSearch: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<orderBy>>;
};

const EventFilter = ({ setSearch, setOrder }: Props) => {
  const [active, setActive] = useState<string>("ascDate");
  const { classes } = useStyle();

  const handleOnSort = (e: any) => {
    switch (e.target.value) {
      case "ascDate":
        setActive("ascDate");
        setOrder({ date: "asc" });
        break;
      case "descDate":
        setActive("descDate");
        setOrder({ date: "desc" });
        break;
      case "descCreated":
        setActive("descCreated");
        setOrder({ createdAt: "desc" });
        break;
      case "ascCreated":
        setActive("ascCreated");
        setOrder({ createdAt: "asc" });
        break;
    }
  };

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
        position="right-start"
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
              <Text size="sm" align="center" mb="xs">
                Order events by
              </Text>
              <Menu.Divider />
              <Chip.Group>
                <Stack align={"center"}>
                  <Chip
                    radius="sm"
                    value="ascDate"
                    color="primary.0"
                    checked={active === "ascDate"}
                    onClick={(e) => handleOnSort(e)}
                  >
                    Upcoming
                  </Chip>
                  <Chip
                    radius="sm"
                    value="descDate"
                    color="primary.0"
                    checked={active === "descDate"}
                    onClick={(e) => handleOnSort(e)}
                  >
                    Future
                  </Chip>
                  <Chip
                    color="primary.0"
                    value="descCreated"
                    radius="sm"
                    checked={active === "descCreated"}
                    onClick={(e) => handleOnSort(e)}
                  >
                    Newest
                  </Chip>
                  <Chip
                    color="primary.0"
                    value="ascCreated"
                    radius="sm"
                    checked={active === "ascCreated"}
                    onClick={(e) => handleOnSort(e)}
                  >
                    Oldest
                  </Chip>
                </Stack>
              </Chip.Group>
            </Menu.Label>
          </Menu.Dropdown>
        </form>
      </Menu>
    </Group>
  );
};

export default EventFilter;
