import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import React, { useState } from "react";

const AddToCartSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center justify-between border-2 border-black/20 text-body-medium px-3 py-2 w-24">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className=""
        >
          <Minus size={16} />
        </button>
        <span className="text-black">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="">
          <Plus size={16} />
        </button>
      </div>
      <button className="bg-orange text-white px-6 py-3 rounded-sm hover:bg-orange-600 flex items-center gap-4 text-body-small">
        Add to Cart
        <span>
          <ShoppingCartSimple size={28} />
        </span>
      </button>
      <button className="text-orange px-4 py-2 rounded-sm hover:bg-orange-600 flex items-center gap-4 text-body-small border border-orange">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCartSection;
