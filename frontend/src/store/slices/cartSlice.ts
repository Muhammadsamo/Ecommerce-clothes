import { ProductInfo } from "@/types/general";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

type TCartItem = {
  quantity: number;
} & ProductInfo;

export type TCartState = {
  items: TCartItem[];
  discount: number;
  shippingFee: number;
};

const initialState: TCartState = {
  items: [],
  discount: 5,
  shippingFee: 15,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        productId: ProductInfo["id"];
        quantity?: number;
        item?: ProductInfo;
        inc?: boolean;
      }>
    ) => {
      const { quantity = 1, productId, item, inc = false } = action.payload;
      const existingProductIdx = state.items.findIndex(
        (item) => item.id === productId
      );
      if (existingProductIdx > -1) {
        if (quantity === 0) {
          state.items.splice(existingProductIdx, 1);
        }
        state.items[existingProductIdx].quantity = inc
          ? state.items[existingProductIdx].quantity + quantity
          : quantity;
        console.log(state.items);
        return;
      }
      if (item)
        state.items.push({
          ...item,
          quantity,
        });
      console.log(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIdx = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (productIdx > -1) {
        state.items.splice(productIdx, 1);
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const orderSummary = createSelector(
  (state: RootState) => state.cart,
  (cart) => {
    const cartSubTotal = cart.items.reduce(
      (prevTotal: number, currentItem: TCartItem) =>
        currentItem.price * currentItem.quantity + prevTotal,
      0
    );

    const discount = cartSubTotal * (cart.discount / 100);

    const cartTotal = cartSubTotal - discount + cart.shippingFee;
    return {
      cartTotal,
      cartSubTotal,
      discount,
    };
  }
);
export default cartSlice.reducer;
