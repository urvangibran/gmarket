import { Box, Button, ButtonGroup, Center, Spinner, useMediaQuery } from "@chakra-ui/react";
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
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

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
          <ButtonGroup
            size={isSmallerThan768 ? "sm" : "md"}
            isAttached
            variant="outline"
            flexWrap={isSmallerThan768 ? "wrap" : "nowrap"}
            justifyContent="center"
          >
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
            <Button
              onClick={() => setFilterType("shoes")}
              isActive={filterType === "shoes"}
              leftIcon={<GiBallerinaShoes />}
            >
              Shoes
            </Button>
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
