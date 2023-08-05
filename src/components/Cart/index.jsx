import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { productsSelector } from "../../actions/products/actionProduct";
import CartListItem from "../Items/CartListItem";

const CartContent = () => {
  const { cart } = useSelector(productsSelector);
  return (
    <div className={`${cart.length > 0 ? "" : "!w-[100%]"} max-h-[75vh] overflow-auto col-span-3 md:w-[80%] border rounded-sm space-y-5 shadow-sm`}>
      <div className="p-4 sticky top-0 bg-white border-b z-10">
        <h1 className="text-4xl tracking-tighter font-bold text-gray-800">
          Your Cart <FaShoppingCart className="inline ml-1" />
        </h1>
      </div>
      {cart.length > 0 ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((p) => (
                <CartListItem p={p} key={p.id} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <div className="p-4">
          <p className="text-center text-xl text-red-500">
            Oops your cart is empty 😬
          </p>
        </div>
      )}
    </div>
  );
};

export default CartContent;
