import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Features from "../components/HomePage/Features";
import TodayDeals from "../components/HomePage/TodayDeals";
import Categories from "../components/HomePage/Categories";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <TodayDeals />
      <Categories />
    </>
  );
};

export default HomePage;
