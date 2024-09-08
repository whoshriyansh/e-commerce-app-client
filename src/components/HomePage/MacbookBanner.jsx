import React from "react";
import { Slide } from "../common/Slide";
import macbook from "../../assets/macbook.png";
import { ArrowRight } from "@phosphor-icons/react";

const MacbookBanner = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="container mx-auto">
        <div className="w-full flex pl-8 bg-[#FFE7D6]">
          <div className="flex flex-col justify-center gap-4 w-1/2">
            <p className="text-body-small text-blue">SAVE UP TO $200.00</p>
            <h1 className="text-display-03 text-black">Macbook Pro</h1>
            <p className="text-body-large text-black/50">
              Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
            </p>
            <div>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <button className="bg-orange text-white px-8 py-3 rounded-sm hover:bg-orange-600 flex items-center gap-4 text-heading-05">
                  Shop Now
                  <span>
                    <ArrowRight size={32} />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <img src={macbook} alt="X box Image" className="w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacbookBanner;
