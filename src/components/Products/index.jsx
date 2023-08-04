import AllProducts from "./AllProducts";
import ShopByCategories from "./ShopByCategories";

const Products = () => {
  return (
    <div id="products" className="space-y-4">
      <AllProducts />
      <ShopByCategories />
    </div>
  );
};

export default Products;
