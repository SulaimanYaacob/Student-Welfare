import { useSession } from "next-auth/react";
import React from "react";
import EventCarousel from "../components/Home/EventCarousel";
import HomeContent from "../components/Home/HomeContent";
import LandingLayout from "../components/LandingLayout";
import { useRouter } from "next/router";

function home() {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (status === "loading") {
    return <div>Checking Authentication....</div>;
  }

  if (!session) {
    setTimeout(() => {
      push("/auth/login");
    }, 5000);
    return <div>You are not authorize!</div>;
  }

  return (
    <LandingLayout>
      <EventCarousel />
      <HomeContent />
    </LandingLayout>
  );
}

export default home;
