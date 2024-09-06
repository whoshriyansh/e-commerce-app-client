import React from "react";
import Rating from "@mui/material/Rating";

export const Tager = ({ name }) => {
  return (
    <div className="border-2 border-gray/50 px-1.5 py-0.5 text-white hover:bg-gray/10 duration-150 text-body-sm">
      {name}
    </div>
  );
};

const badgeStyles = {
  HOT: "bg-[#EE5858] text-white",
  OFF: "bg-[#F3DE6D] text-black",
  "Best Deals": "bg-[#2DA5F3] text-white",
  "Sold Out": "bg-[#929FA5] text-white",
  SALE: "bg-[#2DB224] text-white",
};

export const Badge = ({ text }) => {
  let badgeClass = badgeStyles[text] || "bg-gray-500 text-white";

  if (text.includes("OFF")) {
    badgeClass = badgeStyles["OFF"];
  }

  return (
    <div
      className={`absolute top-0 left-0 px-3 py-1.5 text-body-small font-semibold rounded ${badgeClass}`}
    >
      {text}
    </div>
  );
};

export const RatingStar = ({ number, RevNumber }) => {
  return (
    <div className="flex items-center gap-3">
      <Rating name="read-only" value={number} readOnly />
      <p className="text-body-small text-black/50">({RevNumber})</p>
    </div>
  );
};
