import { Button, Center, Spinner, Tag } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { myAxios } from "../../api/config";
import { AiTwotoneStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBagDashFill } from "react-icons/bs";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/List/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  removeFromCart,
  addToCart
} from "../../actions/products/actionProduct";
import { formatToCurrency } from "../../utils/helpers";
import { userSelector } from "../../actions/user/actionUser";
import CategoryTag from "../../components/CategoryTag/CategoryTag";
import ImageZoom from "../../components/ImageZoom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [isPresentInCart, setIsPresentInCart] = useState(false);
  const dispatch = useDispatch();

  const { products, cart } = useSelector(productsSelector);
  const { isLoggedIn } = useSelector(userSelector);

  useEffect(() => {
    async function getProductDetail() {
      try {
        const res = await myAxios.get(`/products/${id}`);
        // console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsFetching(false);
      }
    }
    getProductDetail();
  }, [id]);

  useEffect(() => {
    const present = cart.find((prod) => prod.id === product.id);
    if (present) {
      setIsPresentInCart(true);
    } else {
      setIsPresentInCart(false);
    }
  }, [id, product, cart]);

  useEffect(() => {
    const filteredData = products.filter(
      (p) => p.category === product?.category && p.id !== product?.id
    );
    setSimilarProducts(filteredData);
  }, [product]);

  if (error) {
    return (
      <Center h="100vh" w="100vw">
        <p className="text-xl text-red-500 font-Poppins">{error}</p>
      </Center>
    );
  }
  if (isFetching) {
    return (
      <Center h="100vh" w="100vw">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] mx-auto  mt-20">
        {/* left */}
        <div className="flex space-x-10 justify-between items-start">
          <div className="h-[300px] min-w-[300px] flex items-center">
            <ImageZoom src={product?.image} alt={product?.title} />
          </div>

          {/* right */}
          <div className="pt-10">
            <CategoryTag product={product} />
            <h1 className="text-3xl font-bold font-Poppins mb-1">
              {product?.title}
            </h1>
            <div className="flex items-center">
              <Tag colorScheme="cyan" color={"black"}>
                {product?.rating.rate} <span className="mr-1"></span> <AiTwotoneStar className="inline" />
              </Tag>
              <p className="inline ml-2 text-gray-500 text-sm">
                ({product?.rating.count})
              </p>
            </div>
            <h2 className="text-xl font-Poppins font-semibold my-3">
              {formatToCurrency.format(product?.price)}
            </h2>
            <p className="text-gray-500 lucida first-letter:uppercase">{product?.description}</p>
            <div className="mt-3 space-x-1">
              <Link
                to="/cart"
              >
                <Button
                  onClick={() =>
                    dispatch(
                      isPresentInCart
                        ? removeFromCart(id)
                        : addToCart({ id, quantity: 1 })
                    )
                  }
                  disabled={!isLoggedIn}
                  leftIcon={<BsFillBagDashFill />}
                  colorScheme="blue"
                  variant="outline"
                >
                  Buy now
                </Button>
              </Link>
              <Button
                onClick={() =>
                  dispatch(
                    isPresentInCart
                      ? removeFromCart(id)
                      : addToCart({ id, quantity: 1 })
                  )
                }
                colorScheme="blue"
                leftIcon={<FaShoppingCart />}
                disabled={!isLoggedIn}
              >
                {isPresentInCart ? "Remove from cart" : "Add to cart"}
              </Button>
            </div>
          </div>
        </div>
        <h1 className="mt-20 font-Poppins font-semibold text-xl">
          Similar Products
        </h1>
        <ProductList filteredProducts={similarProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;
