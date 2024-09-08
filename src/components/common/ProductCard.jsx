import React from "react";
import { Badge, RatingStar } from "./SmallHelperFunctions";
import { Eye, Heart, ShoppingCartSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-black/10 p-2 flex flex-col gap-4 shadow-md shadow-blue/10 hover:scale-105 duration-200">
      <div className="relative flex items-center justify-center group">
        <img
          src={product?.images[0]}
          alt="Product"
          className="w-56 h-56 object-cover transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <button className="bg-white text-black px-2 py-2 rounded-full flex items-center justify-center hover:bg-orange hover:text-white duration-150">
            <Heart size={24} />
          </button>
          <button className="bg-white text-black px-2 py-2 rounded-full flex items-center justify-center hover:bg-orange hover:text-white duration-150">
            <ShoppingCartSimple size={24} />
          </button>
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white text-black px-2 py-2 rounded-full flex items-center justify-center hover:bg-orange hover:text-white duration-150"
          >
            <Eye size={24} />
          </button>
        </div>

        {/* <Badge text={"HOT"} /> */}
      </div>
      <div className="flex flex-col gap-2">
        <RatingStar
          number={product?.reviews.average_rating}
          RevNumber={product?.reviews.review_count}
        />
        <h3 className="text-body-large">{product?.title}</h3>
        <h2 className="text-blue text-body-large">$ {product?.price}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
