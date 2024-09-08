import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Features from "../components/HomePage/Features";
import TodayDeals from "../components/HomePage/TodayDeals";
import Categories from "../components/HomePage/Categories";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";
import Banner from "../components/HomePage/Banner";
import FeatureProduct2 from "../components/HomePage/FeatureProduct2";
import MacbookBanner from "../components/HomePage/MacbookBanner";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <TodayDeals />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <FeatureProduct2 />
      <MacbookBanner />
    </>
  );
};

export default HomePage;
