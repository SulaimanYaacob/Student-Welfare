import React from "react";
import EventCarousel from "../components/Home/EventCarousel";
import HomeContent from "../components/Home/HomeContent";
import getServerSideProps from "../utils/protectedRoute";

function Home() {
  return (
    <>
      <EventCarousel />
      <HomeContent />
    </>
  );
}

export default Home;

export { getServerSideProps };
