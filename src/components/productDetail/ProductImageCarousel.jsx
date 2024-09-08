import React, { useState } from "react";

const ProductImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <img
        src={selectedImage}
        alt="Main Product"
        className="w-3/4 h-auto border border-black/10 rounded-md"
      />
      <div className="w-3/4 flex item-center justify-between mt-2 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-20 h-20 object-cover cursor-pointer border border-black/10 rounded-md ${
              image === selectedImage ? "ring-2 ring-orange/50" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
