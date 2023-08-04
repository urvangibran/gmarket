import React from "react";
import ProductCard from "../../Cards/ProductCard";

const ProductList = ({ filteredProducts }) => {
  return (
    <div className="max-w-[1024px] mx-auto my-10">
      {filteredProducts.length === 0 ? (
        <div className="text-center mt-4 h-[27rem]">
          <p>Sorry there is no products available in this category 😞</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
