import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import ProductImageCarousel from "../../components/productDetail/ProductImageCarousel";
import AddToCartSection from "../../components/productDetail/AddToCart";
import ProductTabs from "../../components/productDetail/ProductTabs";
import { RatingStar } from "../../components/common/SmallHelperFunctions";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === id);

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div className="mt-10">
      <div className="container mx-auto flex flex-col items-start justify-start gap-20">
        <div className="flex items-start justify-start gap-20">
          <div className="w-1/2">
            <ProductImageCarousel images={product?.images} />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-5">
            {/* Rating  */}
            <div className="flex items-center gap-5 justify-center">
              <RatingStar
                number={product?.reviews.average_rating}
                RevNumber={`${product?.reviews.review_count} User feedback`}
              />
              <p>{product?.reviews.average_rating} Star Rating</p>
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            </div>

            {/* ADDITIONAAL iNFO  */}
            <div className="flex flex-col gap-3 w-1/2">
              <div className="flex items-center gap-5 justify-between">
                <p>Brand : {product?.brand}</p>
                <p>Availability: {product?.stock}</p>
              </div>
              <div className="flex items-center gap-5 justify-between">
                <p>Category : {product?.category}</p>
              </div>
            </div>

            {/* Buttons  */}
            <AddToCartSection />
          </div>
        </div>
        <div className="w-full">
          <ProductTabs product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
