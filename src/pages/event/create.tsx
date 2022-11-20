import React from "react";
import CreateEvent from "../../components/Event/CreateEvent";
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
