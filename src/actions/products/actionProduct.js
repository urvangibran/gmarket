import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { myAxios } from "../../api/config";

const initialState = {
  products: [],
  cart: [],
  likedProducts: [],
  isFetching: false,
  error: null,
};

export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await myAxios.get("/products")
      return [...res.data]
    } catch (err) {
      return err.message
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = current(state).products.find(
        (product) => product.id == action.payload.id
      )
      if (product) {
        const updatedProduct = { ...product };
        updatedProduct.quantity++
        state.cart.push(updatedProduct)
      }
    },

    removeFromCart(state, action) {
      const filteredCart = current(state).cart.filter(
        (product) => product.id !== Number(action.payload)
      )
      state.cart = filteredCart
    },

    increaseQuantity(state, action) {
      const productId = action.payload
      const productIndex = state.cart.findIndex((product) => product.id === productId)
      if (productIndex >= 0) {
        state.cart[productIndex].quantity++
      }
    },

    decreaseQuantity(state, action) {
      const productId = action.payload
      const productIndex = state.cart.findIndex((product) => product.id === productId)
      if (productIndex >= 0) {
        state.cart[productIndex].quantity =
          state.cart[productIndex].quantity - 1
      }
    },

    addToWishlist(state, action) {
      const product = current(state).products.find(
        (product) => product.id === action.payload
      )
      if (product) {
        state.likedProducts.push(product)
      }
    },

    removeFromWishlist(state, action) {
      const filteredList = current(state).likedProducts.filter(
        (product) => product.id !== action.payload
      )
      state.likedProducts = filteredList
    },

    clearWishList(state) {
      state.likedProducts = []
    },

    clearCart(state) {
      state.cart = []
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isFetching = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isFetching = false
        const loadedProducts = action.payload.map((product) => {
          product.quantity = 0
          return product
        })
        state.products = [...loadedProducts]
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isFetching = false
        state.error = action.payload
      })
  },
})

export const productsSelector = (state) => state.products

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishList,
  removeFromCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = productSlice.actions

export default productSlice.reducer
