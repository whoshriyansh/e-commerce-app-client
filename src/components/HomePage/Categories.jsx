import React from "react";
import { Carousel } from "flowbite-react";
import xbox from "../../assets/xbox.png";
import pixel from "../../assets/pixel.png";
import buds from "../../assets/buds.png";
import { Link } from "react-router-dom";

const CategoryBox = ({ img, CategoryName, AnchorTag }) => {
  return (
    <div className="p-4 flex flex-col justify-center items-center  gap-4 border border-black/10 rounded-sm">
      <img src={img} alt={CategoryName} className="w-36 h-36 object-cover" />
      <Link
        to={AnchorTag}
        className="text-blue-500 hover:underline text-lg font-semibold"
      >
        {CategoryName}
      </Link>
    </div>
  );
};

const Categories = () => {
  // Sample data for the categories
  const categories = [
    { img: xbox, name: "Gaming Consoles", link: "/gaming-consoles" },
    { img: pixel, name: "Smartphones", link: "/smartphones" },
    { img: buds, name: "Headphones", link: "/headphones" },
    { img: pixel, name: "Smartphones", link: "/smartphones" },
    { img: buds, name: "Headphones", link: "/headphones" },
    { img: xbox, name: "Gaming Consoles", link: "/gaming-consoles" },
  ];

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center gap-5">
      <h2 className="text-black text-heading-02 text-center">
        Shop by Catergories
      </h2>
      <div className="w-full h-full">
        {/* Slide 1 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryBox
              key={index}
              img={category.img}
              CategoryName={category.name}
              AnchorTag={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
