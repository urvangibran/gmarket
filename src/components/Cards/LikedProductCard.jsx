import { IconButton, Tag, Tooltip } from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../actions/products/actionProduct";
import { formatToCurrency } from "../../utils/helpers";
import { userSelector } from "../../actions/user/actionUser";
import { Link } from "react-router-dom";

const LikedProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(userSelector);
  return (
    <li className="relative  p-4 border rounded-md" key={product.id}>
      <Tooltip label="remove" hasArrow placement="top">
        <IconButton
          className="!absolute top-2 right-3"
          disabled={!isLoggedIn}
          onClick={() => dispatch(removeFromWishlist(product.id))}
        >
          <MdDelete />
        </IconButton>
      </Tooltip>
      <Link to={`/products/${product.id}`}>
        <div className="flex space-x-3 items-center">
          <div className="h-[100px] min-w-[100px] flex items-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-cover"
            />
          </div>
          <div className="w-full">
            <h1 className="text-base font-Poppins max-w-lg">{product.title}</h1>

            <div className="flex items-start space-x-1">
              <Tag colorScheme="green" size="sm">
                {product.rating.rate} <AiTwotoneStar className="inline" />
              </Tag>
              <p className="inline ml-2 text-gray-500 text-sm">
                ({product.rating.count})
              </p>
            </div>
            <h2 className="text-sm font-Poppins font-semibold my-3">
              {formatToCurrency.format(product.price)}
            </h2>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default LikedProductCard;
