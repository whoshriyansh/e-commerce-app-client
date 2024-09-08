import React from "react";
import ProductCard from "../common/ProductCard";
import { ArrowRight } from "@phosphor-icons/react";
import { useProducts } from "../../context/ProductContext";

const TodayDeals = () => {
  const { products } = useProducts();

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="container mx-auto items-center justify-center h-[10vh] mt-10">
        <h1 className="text-display-01">Loading</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <h2 className="text-heading-03">Best Deals</h2>
          <p className="flex items-center gap-2 text-body-small">
            Deals ends in{" "}
            <span className="bg-yellow px-2 py-1 text-body-large">
              16d : 21h : 57m : 23s
            </span>
          </p>
        </div>
        <div className="flex gap-2  items-center text-blue">
          <p>Browse All Product</p>
          <ArrowRight size={24} />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TodayDeals;
