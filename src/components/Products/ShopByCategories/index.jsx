import { Box, Button, ButtonGroup, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { GiBigDiamondRing, GiBallerinaShoes } from "react-icons/gi";
import { GrPersonalComputer } from 'react-icons/gr'
import { ImHeadphones } from "react-icons/im";
import { useSelector } from "react-redux";
import ProductList from "../../List/ProductList";
import { productsSelector } from "../../../actions/products/actionProduct";

const ShopByCategories = () => {
  const [filterType, setFilterType] = useState("electronics");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products, isFetching } = useSelector(productsSelector);

  useEffect(() => {
    const filteredData = products.filter((product) => product.category === filterType);
    setFilteredProducts(filteredData);
  }, [filterType, products]);

  if (isFetching) {
    return (
      <Center>
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <div>
      <h1 className="text-5xl lucida font-bold mb-6 text-center">
        Shop by Categories
      </h1>
      <Center>
        <Box
          p={2}
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg" }}
          transition="all 0.3s"
        >
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button
              onClick={() => setFilterType("electronics")}
              isActive={filterType === "electronics"}
              leftIcon={<ImHeadphones />}
            >
              Electronics
            </Button>
            <Button
              onClick={() => setFilterType("jewelery")}
              isActive={filterType === "jewelery"}
              leftIcon={<GiBigDiamondRing />}
            >
              Jewelleries
            </Button>
            <Button
              onClick={() => setFilterType("men's clothing")}
              isActive={filterType === "men's clothing"}
              leftIcon={<FaMale />}
            >
              Men's Clothing
            </Button>
            <Button
              onClick={() => setFilterType("women's clothing")}
              isActive={filterType === "women's clothing"}
              leftIcon={<FaFemale />}
            >
              Women's Clothing
            </Button>
            {/* there is no API shoes */}
            <Button
              onClick={() => setFilterType("shoes")}
              isActive={filterType === "shoes"}
              leftIcon={<GiBallerinaShoes />}
            >
              Shoes
            </Button>
            {/* there is no API for computer and laptop */}
            <Button
              onClick={() => setFilterType("computer")}
              isActive={filterType === "computer"}
              leftIcon={<GrPersonalComputer />}
            >
              Computer & Laptop
            </Button>
          </ButtonGroup>
        </Box>
      </Center>
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
};

export default ShopByCategories;
