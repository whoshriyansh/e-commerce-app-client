import React from "react";
import ProductCard from "../common/ProductCard";

const TodayDeals = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 mt-10 gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default TodayDeals;
