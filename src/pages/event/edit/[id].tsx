import { Stack } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import getServerSideProps from "../../../utils/protectedRoute";

const editEvent = () => {
  const router = useRouter();
  const { id } = router.query;

  // If the authorId !== userId => cannot update?
  // create react-hook for update event
  // get the event to edit..
  // reject this idea cause it sucks.
  return <Stack></Stack>;
};

export default editEvent;

export { getServerSideProps };
