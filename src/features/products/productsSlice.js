import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { myAxios } from "../../api/config";

const initialState = {
  products: [],
  cart: [],
  likedProducts: [],
  isFetching: false,
  error: null,
};

//async thunk call for posts:
export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await myAxios.get("/products");
      return [...res.data];
    } catch (err) {
      return err.message;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //add a product to the cart
    addToCart(state, action) {
      const product = current(state).products.find(
        (p) => p.id == action.payload.id
      );
      if (product) {
        const updatedProduct = { ...product };
        updatedProduct.quantity++;
        state.cart.push(updatedProduct);
      }
    },

    //remove a product from the cart
    removeFromCart(state, action) {
      const filteredCart = current(state).cart.filter(
        (p) => p.id !== Number(action.payload)
      );
      state.cart = filteredCart;
    },

    //Increase cart product quantity:
    increaseQuantity(state, action) {
      const productId = action.payload;
      const productIndex = state.cart.findIndex((p) => p.id === productId);
      if (productIndex >= 0) {
        // Increase the quantity if the product is already in the cart
        state.cart[productIndex].quantity++;
      }
    },

    //Decrease cart product quantity:
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const productIndex = state.cart.findIndex((p) => p.id === productId);
      if (productIndex >= 0) {
        // Descrease the quantity if the product is already in the cart
        state.cart[productIndex].quantity =
          state.cart[productIndex].quantity - 1;
      }
    },

    //like a product
    addToWishlist(state, action) {
      const product = current(state).products.find(
        (p) => p.id === action.payload
      );
      if (product) {
        state.likedProducts.push(product);
      }
    },

    //remove from like list
    removeFromWishlist(state, action) {
      const filteredList = current(state).likedProducts.filter(
        (p) => p.id !== action.payload
      );
      state.likedProducts = filteredList;
    },

    //clear like list:
    clearWishList(state) {
      state.likedProducts = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isFetching = false;
        const loadedProducts = action.payload.map((p) => {
          p.quantity = 0;
          return p;
        });
        state.products = [...loadedProducts];
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  },
});

export const productsSelector = (state) => state.products;

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishList,
  removeFromCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} = productSlice.actions;

export default productSlice.reducer;
