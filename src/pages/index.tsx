import { Stack } from "@mantine/core";
import React, { useState } from "react";
import EventCarousel from "../components/Home/EventCarousel";
import HomeContent from "../components/Home/HomeContent";
import getServerSideProps from "../utils/protectedRoute";

function Home() {
  return (
    <Stack sx={{ height: "100%", justifyContent: "center" }}>
      <EventCarousel />
      <HomeContent />
    </Stack>
  );
}

export default Home;

export { getServerSideProps };
