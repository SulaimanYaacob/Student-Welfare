import { useState } from "react";
import { trpc } from "../utils/trpc";

type orderBy = {
  date?: "asc" | "desc";
  timeEnd?: "asc" | "desc";
};

//TODO use infiniteQueries
const useGetEvents = () => {
  const [order, setOrder] = useState<orderBy>({ date: "asc" });
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    trpc.eventPost.getAll.useInfiniteQuery(
      {
        orderBy: order,
      },
      { getNextPageParam: (lastPage) => lastPage.nextCursor }
    );

  return { data, isLoading, fetchNextPage, setOrder, hasNextPage, isFetching };
};

export default useGetEvents;
