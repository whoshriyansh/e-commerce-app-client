import React, { useState } from "react";
import SortOptions from "../../components/ShopPage/SortOptions";
import SearchBar from "../../components/ShopPage/SearchBar";
import ProductGrid from "../../components/ShopPage/ProductGrid";
import FilterTable from "../../components/ShopPage/FilterTable";
import { useProducts } from "../../context/ProductContext";

const ShopPage = () => {
  const { products } = useProducts();

  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    brand: "",
    categories: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const applyFilters = (product) => {
    const { minPrice, maxPrice, brand, categories } = filters;
    return (
      (minPrice === "" || product.price >= minPrice) &&
      (maxPrice === "" || product.price <= maxPrice) &&
      (brand === "" || product.brand === brand) &&
      (categories === "" || product.category === categories) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const sortProducts = (products) => {
    switch (sortOption) {
      case "priceAsc":
        return products.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return products.sort((a, b) => b.price - a.price);
      case "nameAsc":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "nameDesc":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case "mostRev":
        return products.sort(
          (a, b) => b.reviews.review_count - a.reviews.review_count
        );
      default:
        return products;
    }
  };

  const filteredProducts = products.filter(applyFilters);
  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div className="mt-10">
      <div className="container mx-auto flex gap-10">
        <div className="w-1/4 bg-gray/40 px-4 py-1">
          {/* Filters Section */}
          <FilterTable
            filters={filters}
            onFilterChange={(name, value) =>
              setFilters((prev) => ({ ...prev, [name]: value }))
            }
          />
        </div>
        <div className="w-3/4 flex flex-col items-start gap-5">
          <div className="w-full flex justify-between items-center">
            <div className="w-3/4">
              <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
            </div>
            <div className="w-1/4">
              <SortOptions sortOption={sortOption} onSort={setSortOption} />
            </div>
          </div>
          <div className="w-full">
            <ProductGrid productsData={sortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
