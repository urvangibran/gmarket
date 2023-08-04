import { Center, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  productsSelector,
} from "../../../actions/products/actionProduct";
import Carousel from "../../Carousel";

const AllProducts = () => {
  const { products, isFetching, error } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (error) {
    return (
      <Center>
        <p className="text-xl text-red-500 arial">{error}</p>
      </Center>
    );
  }

  return (
    <div className="max-w-[1024px] mx-auto py-20">
      <h1 className="text-5xl lucida font-bold mb-5 text-center">
        All Products
      </h1>
      {isFetching ? (
        <Center>
          <Spinner size="lg" />
        </Center>
      ) : (
        <Carousel products={products} />
      )}
    </div>
  );
};

export default AllProducts;
