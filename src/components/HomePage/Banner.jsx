import React from "react";
import apple from "../../assets/apple.png";
import mi from "../../assets/mi.png";
import { ArrowRight } from "@phosphor-icons/react";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center gap-5 mt-10">
        {/* First Banner  */}
        <div className="w-1/2 flex p-8 bg-gray">
          <div className="flex flex-col justify-center gap-4 w-1/2">
            <p className="text-body-small bg-blue text-white px-2 py-1 w-32 text-center">
              INTRODUCING
            </p>
            <h1 className="text-heading-01 text-black">
              New Apple Homepod Mini
            </h1>
            <p className="text-body-medium text-black/50">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
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
            <img src={apple} alt="X box Image" className="w-60" />
          </div>
        </div>
        {/* Second Banner  */}
        <div className="w-1/2 flex bg-black">
          <div className="flex flex-col justify-center gap-4 w-1/2 pl-8 pt-8 pb-8">
            <p className="text-body-small bg-yellow text-black px-2 py-1 w-32 text-center">
              INTRODUCING
            </p>
            <h1 className="text-heading-01 text-white">
              Xiaomi Mi 11 Ultra 12GB+256GB
            </h1>
            <p className="text-body-medium text-gray">
              *Data provided by internal laboratories. Industry measurment.
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
          <div className="flex items-end justify-end w-1/2">
            <img src={mi} alt="X box Image" className="w-72" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
