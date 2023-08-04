import { Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  productsSelector,
  removeFromWishlist,
} from "../../../actions/products/actionProduct";
import { userSelector } from "../../../actions/user/actionUser";

const LikeButton = ({ productId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const { likedProducts } = useSelector(productsSelector);
  const { isLoggedIn } = useSelector(userSelector);

  useEffect(() => {
    setIsLiked(likedProducts.find((p) => p.id === productId));
  }, [likedProducts]);

  const dispatch = useDispatch();

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      dispatch(removeFromWishlist(productId));
    } else {
      setIsLiked(true);
      dispatch(addToWishlist(productId));
    }
  };

  return (
    <Tooltip
      hasArrow
      label={
        !isLoggedIn
          ? "Please login to wishlist a product"
          : isLoggedIn && !isLiked
          ? "Add this product to wishlist"
          : "Remove this product from wishlist"
      }
      bg="gray.300"
      color="black"
    >
      <button
        disabled={!isLoggedIn}
        onClick={() => handleLike()}
        className="border rounded-full p-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiHeart
          className={`h-6 w-6  ${isLiked && "fill-red-500 text-red-500"}`}
        />
      </button>
    </Tooltip>
  );
};

export default LikeButton;
