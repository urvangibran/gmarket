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

const CartListItem = ({ p }) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(increaseQuantity(p.id));
  };

  const decrementQuantity = () => {
    if (p.quantity === 1) {
      dispatch(removeFromCart(p.id));
      return;
    }
    dispatch(decreaseQuantity(p.id));
  };

  return (
    <Tr>
      {/* Product */}
      <Td>
        <Link to={`/products/${p.id}`} className="flex flex-col items-start">
          <div className="h-[70px] min-w-[70px]">
            <img
              src={p.image}
              alt={p.title}
              className="max-h-full object-cover"
            />
          </div>
          <div className="">
            <h2
              className={`w-[120px] truncate font-medium text-sm font-Poppins md:w-[290px] ${
                p.title.length > 120 ? "h-auto max-h-[120px] md:max-h-[160px] lg:max-h-[200px] xl:max-h-[240px] overflow-hidden overflow-y-auto" : ""
              }`}
            >
              {p.title}
            </h2>
          </div>
        </Link>
      </Td>
      {/* Price */}
      <Td>
        <span className="font-medium">
          {formatToCurrency.format(p.price)}
        </span>
      </Td>
      {/* Quantity */}
      <Td>
        <div className="flex items-center space-x-1">
          <IconButton size="xs" variant='solid' colorScheme="gray" onClick={decrementQuantity}>
            <RiSubtractLine />
          </IconButton>
          <span className="text-lg p-1.5">{p.quantity}</span>
          <IconButton size="xs" variant='solid' colorScheme="gray" onClick={incrementQuantity}>
            <MdAdd />
          </IconButton>
        </div>
      </Td>
      <Td>
        <span className="font-medium">
          {formatToCurrency.format(p.price * p.quantity)}
        </span>
      </Td>
      {/* Remove */}
      <Td>
        <Tooltip
          label="Remove this product from cart"
        >
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => dispatch(removeFromCart(p.id))}
          >
            Remove
          </Button>
        </Tooltip>
      </Td>
    </Tr>
  );
};

export default CartListItem;
