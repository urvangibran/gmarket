import React from "react";
import { Link } from "react-router-dom";
import { Badge, Center } from "@chakra-ui/react";
import LikeButton from "../Buttons/LikeButton";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 mr-4 rounded-md hover:border-lime-500 transition-all duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="space-y-1">
          <img
            src={product.image}
            alt={product.title}
            className="h-[150px] w-full object-contain"
          />
          <h3 className="text-center max-w-[15rem] mx-auto font-Poppins truncate">
            {product.title}
          </h3>
          <Center>
            <Badge>{product.category}</Badge>
          </Center>
        </div>
      </Link>
      <div className="flex items-center justify-end mt-6">
        <LikeButton productId={product.id} />
      </div>
    </div>
  );
};

export default ProductCard;
