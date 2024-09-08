import { ArrowRight } from "@phosphor-icons/react";
import React, { useState } from "react";
import buds2 from "../../assets/buds2.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductCard from "../common/ProductCard";
import { useProducts } from "../../context/ProductContext";

const FeatureProduct2 = () => {
  const { products } = useProducts();

  const [selectedTab, setSelectedTab] = useState("All Products");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filterProducts =
    selectedTab === "All Products"
      ? products
      : products.filter((product) => product.category === selectedTab);

  if (!Array.isArray(filterProducts) || filterProducts.length === 0) {
    return (
      <div className="container mx-auto items-center justify-center h-[10vh] mt-10">
        <h1 className="text-display-01">Loading</h1>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="container mx-auto flex gap-10">
        {/* Tabs */}
        <div className="w-3/4 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h2 className="text-heading-03">Featured Products</h2>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              sx={{
                ".MuiTabs-indicator": {
                  backgroundColor: "orange",
                },
                ".MuiTab-root": {
                  color: "gray",
                  fontSize: "14px",
                  "&.Mui-selected": {
                    color: "black",
                  },
                },
              }}
              aria-label="custom tabs"
            >
              <Tab value="All Products" label="All Products" />
              <Tab value="iPhone" label="iPhone" />
              <Tab value="Laptop" label="Laptop" />
              <Tab value="SmartPhone" label="SmartPhone" />
              <Tab value="Headphones" label="Headphones" />
              <Tab value="Smartwatch" label="Smartwatch" />
            </Tabs>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filterProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="w-1/4 bg-[#F3DE6D] flex flex-col h-96">
          <div className="flex flex-col gap-2 items-center justify-center p-2">
            <div className="">
              <img src={buds2} alt="Laptop" className="w-32" />
            </div>
            <h2 className="text-black text-heading-03 text-center">
              Xiaomi True Wireless Earbuds
            </h2>
            <p className="text-body-small text-black/50 text-center">
              Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
            </p>
            <p className="flex items-center gap-2 text-body-small">
              Only For
              <span className="bg-white px-2 py-1 text-body-small">
                $299 USD
              </span>
            </p>
            <button className="bg-orange text-white px-4 py-2 rounded-sm hover:bg-orange-600 flex items-center gap-4 text-body-large">
              Shop Now
              <span>
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct2;
