import { useState } from "react";
import { trpc } from "../utils/trpc";

type orderBy = {
  date?: "asc" | "desc";
  timeEnd?: "asc" | "desc";
};

const useGetEvents = () => {
  const [order, setOrder] = useState<orderBy>({ date: "asc" });
  const [search, setSearch] = useState("");
  const {
    data,
    refetch,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = trpc.eventPost.getAll.useInfiniteQuery(
    { orderBy: order, contains: search },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  return {
    data,
    search,
    refetch,
    setOrder,
    setSearch,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useGetEvents;
