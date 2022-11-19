import { Group, Stack } from "@mantine/core";
import React from "react";
import CreateEvent from "../../components/Event/CreateEvent";
import FileDropzone from "../../components/Event/Dropzone";
import getServerSideProps from "../../utils/protectedRoute";

function createEvent() {
  return (
    <>
      <CreateEvent />
    </>
  );
}

export default createEvent;

export { getServerSideProps };
