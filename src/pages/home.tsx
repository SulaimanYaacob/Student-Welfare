import React from "react";
import EventCarousel from "../components/Home/EventCarousel";
import HomeContent from "../components/Home/HomeContent";
import LandingLayout from "../components/LandingLayout";

function home() {
  return (
    <LandingLayout>
      <EventCarousel />
      <HomeContent />
    </LandingLayout>
  );
}

export default home;
