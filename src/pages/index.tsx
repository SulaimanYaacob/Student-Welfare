import { Stack } from "@mantine/core";
import Head from "next/head";
import React from "react";
import EventCarousel from "../components/Home/EventCarousel";
import HomeContent from "../components/Home/HomeContent";
import getServerSideProps from "../utils/protectedRoute";

function Home() {
  return (
    //TODO Redesign HomeContent Using Cards
    <>
      <Head>
        <title>Home Page</title>
        <meta name="author" content="Sulaiman" />
        <meta
          name="description"
          content="Welcome to Student Welfare, a platform where UTM students get their help with their necessities"
        />
      </Head>
      <Stack sx={{ height: "100%", justifyContent: "center" }}>
        <EventCarousel />
        <HomeContent />
      </Stack>
    </>
  );
}

export default Home;

export { getServerSideProps };
