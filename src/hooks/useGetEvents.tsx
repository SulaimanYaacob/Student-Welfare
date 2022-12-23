import { useForm } from "@mantine/form";
import { useState } from "react";
import { trpc } from "../utils/trpc";

export type orderBy = {
  date?: "asc" | "desc";
  createdAt?: "asc" | "desc";
};

const useGetEvents = () => {
  const [order, setOrder] = useState<orderBy>({ date: "asc" });
  const [search, setSearch] = useState("");
  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
  } = trpc.eventPost.getAll.useInfiniteQuery(
    { orderBy: order, contains: search },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  const events = data?.pages.flatMap((item) => item.events) ?? [];

  return {
    events,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    setOrder,
    setSearch,
    fetchNextPage,
  };
};

export default useGetEvents;
