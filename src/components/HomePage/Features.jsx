import React from "react";
import { Package } from "@phosphor-icons/react";
import Divider from "@mui/material/Divider";

const Features = () => {
  return (
    <div className="mt-10 hidden lg:flex">
      <div className="container mx-auto border border-black/10 grid grid-flow-col">
        <div className="px-10 py-8 flex items-center justify-center gap-5">
          <div>
            <Package size={40} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-body-large text-black">FASTEST DELIVERY</h3>
            <p className="text-body-small text-black/60">Delivery in 24/H</p>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="px-10 py-8 flex items-center justify-center gap-5">
          <div>
            <Package size={40} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-body-large text-black">FASTEST DELIVERY</h3>
            <p className="text-body-small text-black/60">Delivery in 24/H</p>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="px-10 py-8 flex items-center justify-center gap-5">
          <div>
            <Package size={40} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-body-large text-black">FASTEST DELIVERY</h3>
            <p className="text-body-small text-black/60">Delivery in 24/H</p>
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="px-10 py-8 flex items-center justify-center gap-5">
          <div>
            <Package size={40} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-body-large text-black">FASTEST DELIVERY</h3>
            <p className="text-body-small text-black/60">Delivery in 24/H</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
