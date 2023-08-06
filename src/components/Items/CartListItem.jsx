import { Button, IconButton, Td, Tooltip, Tr } from "@chakra-ui/react";
import { formatToCurrency } from "../../utils/helpers";
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../actions/products/actionProduct";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartListItem = ({ product }) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(increaseQuantity(product.id));
  };

  const decrementQuantity = () => {
    if (product.quantity === 1) {
      dispatch(removeFromCart(product.id));
      return;
    }
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <Tr>
      <Td>
        <Link to={`/products/${product.id}`} className="flex flex-col items-start">
          <div className="h-[70px] min-w-[70px]">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-cover"
            />
          </div>
          <div className="">
            <h2
              className={`w-[120px] truncate font-medium text-sm md:w-[290px] ${
                product.title.length > 120 ? "h-auto max-h-[120px] md:max-h-[160px] lg:max-h-[200px] xl:max-h-[240px] overflow-hidden overflow-y-auto" : ""
              }`}
            >
              {product.title}
            </h2>
          </div>
        </Link>
      </Td>
      <Td>
        <span className="font-medium">
          {formatToCurrency.format(product.price)}
        </span>
      </Td>
      <Td>
        <div className="flex items-center space-x-1">
          <IconButton size="xs" variant='solid' colorScheme="gray" onClick={decrementQuantity}>
            <RiSubtractLine />
          </IconButton>
          <span className="text-lg product-1.5">{product.quantity}</span>
          <IconButton size="xs" variant='solid' colorScheme="gray" onClick={incrementQuantity}>
            <MdAdd />
          </IconButton>
        </div>
      </Td>
      <Td>
        <span className="font-medium">
          {formatToCurrency.format(product.price * product.quantity)}
        </span>
      </Td>
      <Td>
        <Tooltip
          label="Remove this product from cart"
        >
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            Remove
          </Button>
        </Tooltip>
      </Td>
    </Tr>
  );
};

export default CartListItem;
