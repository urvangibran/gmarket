import React from "react";
import { Link } from "react-router-dom";
import { Badge, Center } from "@chakra-ui/react";
import LikeButton from "../Buttons/LikeButton";

const ProductCard = ({ product }) => {
  const stock = Math.floor(Math.random() * 31);

  return (
    <div className="border p-4 mr-4 min-w-[120px] rounded-md hover:border-[#012A4A] transition-all duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="space-y-1">
          <img
            src={product.image}
            alt={product.title}
            className="h-[150px] w-full object-contain"
          />
          <h3 className="text-center max-w-[15rem] mx-auto lucida truncate">
            {product.title}
          </h3>
          <Center>
            <Badge mt={3} variant="outline" colorScheme="cyan">{product.category}</Badge>
          </Center>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-6">
        <h3 className="arial text-[13px] text-[#B1A8A8]">
          {stock === 0 ? "Out of stock" : `Stock: ${stock}`} 
        </h3>
        <LikeButton productId={product.id} />
      </div>
    </div>
  );
};

export default ProductCard;
