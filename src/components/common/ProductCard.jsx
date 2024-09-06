import React from "react";
import xBox from "../../assets/xbox.png";
import { Badge, RatingStar } from "./SmallHelperFunctions";

const ProductCard = (ProductData) => {
  return (
    <div className="border border-black/10 p-2 flex flex-col gap-4">
      <div className="relative flex items-center justify-center">
        <img src={xBox} alt="" className="w-56" />
        <Badge text={"HOT"} />
      </div>
      <div className="flex flex-col gap-2">
        <RatingStar number={3} RevNumber={500} />
        <h3 className="text-body-large">
          Amazon Basics High-Speed HDMI Cable 18 Gbps, 4K/6...
        </h3>
        <h2 className="text-blue text-body-large">$390</h2>
      </div>
    </div>
  );
};

export default ProductCard;
