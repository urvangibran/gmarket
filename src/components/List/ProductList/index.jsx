import ProductCard from "../../Cards/ProductCard";

const ProductList = ({ filteredProducts }) => {
  return (
    <div className="max-w-[1024px] mx-auto my-10">
      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
