import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IFrequentlyOrdered } from "../../../interfaces";

export interface ProductsState {
  id: number;
  products: IFrequentlyOrdered[];
}

const initialState: ProductsState = {
  id: 0,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdd: (state, action: PayloadAction<IFrequentlyOrdered>) => {
      console.log(state);
      console.log(action.payload);

      state.products.push(action.payload);
      // state.value += 1;
    },
    productDelete: (state, action: PayloadAction<IFrequentlyOrdered>) => {
      // state.value -= 1;
      // удаление по id
    },
  },
});

// , action: PayloadAction<number>

export const { productAdd, productDelete } = productsSlice.actions;

export const selectProduct = (state: RootState) => state.products.products;

export default productsSlice.reducer;
