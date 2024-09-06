import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

const Slide = ({
  heading,
  subHeading,
  tittle,
  buttonText,
  imgLink,
  imgW,
  bg,
}) => {
  return (
    <div className="w-full flex p-8 mt-8" style={{ backgroundColor: bg }}>
      <div className="flex flex-col justify-center gap-4 w-1/2">
        <p className="text-body-small text-blue">---{subHeading}</p>
        <h1 className="text-display-03 text-black">{tittle}</h1>
        <p className="text-body-large text-black/50">{heading}</p>
        <div>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <button className="bg-orange text-white px-8 py-3 rounded-sm hover:bg-orange-600 flex items-center gap-4 text-heading-05">
              {buttonText}
              <span>
                <ArrowRight size={32} />
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img src={imgLink} alt="X box Image" style={{ width: imgW }} />
      </div>
    </div>
  );
};

export default Slide;
