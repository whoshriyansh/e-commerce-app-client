import React from "react";
import { Carousel } from "flowbite-react";
import xbox from "../../assets/xbox.png";
import pixel from "../../assets/pixel.png";
import buds from "../../assets/buds.png";
import Slide from "../common/Slide";
import { ArrowRight } from "@phosphor-icons/react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="container mx-auto flex gap-10 h-[60vh]">
        {/* 1st Container */}
        <Carousel className="w-full lg:w-3/4 h-full">
          {/* 1st Slide */}
          <Slide
            subHeading={"THE BEST PLACE TO PLAY"}
            tittle={"Xbox Consoles"}
            heading={
              "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD."
            }
            buttonText={"Shop Now"}
            imgLink={xbox}
            imgW={"384px"}
            bg="#F2F4F5"
          />
          {/* 2nd Slide */}
          <Slide
            subHeading={"THE BEST PLACE TO PLAY"}
            tittle={"Xbox Consoles"}
            heading={
              "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD."
            }
            buttonText={"Shop Now"}
            imgLink={xbox}
            imgW={"384px"}
            bg="#F2F4F5"
          />
          {/* 3rd Slide */}
          <Slide
            subHeading={"THE BEST PLACE TO PLAY"}
            tittle={"Xbox Consoles"}
            heading={
              "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD."
            }
            buttonText={"Shop Now"}
            imgLink={xbox}
            imgW={"384px"}
            bg="#F2F4F5"
          />
        </Carousel>

        <div className="hidden w-1/4 lg:flex lg:flex-col">
          {/* Slider 1  */}
          <div className="h-1/2">
            <div className="w-full flex pl-8 pt-8 mt-8 bg-black">
              <div className="flex flex-col justify-center gap-4 w-1/2 pb-8">
                <p className="text-body-small text-yellow">SUMMER SALES</p>
                <h1 className="text-heading-03 text-white">
                  New Google Pixel 6 Pro
                </h1>
                <div>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    <button className="bg-orange text-white px-4 py-2 rounded-sm hover:bg-orange-600 flex items-center gap-4 text-body-small">
                      Shop Now
                      <span>
                        <ArrowRight size={16} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex items-end justify-end w-1/2">
                <img src={pixel} alt="X box Image" className="w-96" />
              </div>
            </div>
          </div>
          {/* Slider 2  */}
          <div className="h-1/2">
            <div className="w-full flex p-8 bg-gray">
              <div className="flex items-center justify-center w-1/2">
                <img src={buds} alt="X box Image" className="w-96" />
              </div>
              <div className="flex flex-col justify-center gap-4 w-1/2">
                <h1 className="text-heading-03 text-black">
                  Xiaomi FlipBuds Pro
                </h1>
                <p className="text-body-large text-blue">$299 USD</p>

                <div>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    <button className="bg-orange text-white px-4 py-2 rounded-sm hover:bg-orange-600 flex items-center gap-4 text-body-small">
                      Shop Now
                      <span>
                        <ArrowRight size={16} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
