import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IProduct } from "../../../interfaces";

export interface ProductsState {
  id: number;
  products: IProduct[];
}

const initialState: ProductsState = {
  id: 0,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdd: (state, action: PayloadAction<IProduct>) => {
      // console.log(state);
      // console.log(action.payload);

      state.id += 1;

      const { title, id } = action.payload;

      const existingProduct = state.products.find(
        (product) => product.title === title
      );

      if (existingProduct) {
        console.log("Такой продукт уже есть в корзине!");

        // console.log(existingProduct.basketCount);

        if (existingProduct.basketCount !== undefined) {
          existingProduct.basketCount += 1;

          // console.log(existingProduct);
          // console.log(state.products);
        }
      } else {
        const newProduct = action.payload;

        if (newProduct.basketCount !== undefined) {
          newProduct.basketCount += 1;
        }

        state.products.push(newProduct);
      }

      // state.value += 1;
    },
    productDelete: (state, action: PayloadAction<IProduct>) => {
      const { title } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.title === title
      );

      if (existingProduct) {
        if (existingProduct.basketCount) {
          existingProduct.basketCount -= 1;

          if (existingProduct.basketCount === 0) {
            const newArrProducts = state.products.filter(
              (product) => product.title !== title
            );

            state.products = newArrProducts;
          }
        }
      }

      // state.products.

      // state.value -= 1;
      // удаление по id
    },
  },
});

// , action: PayloadAction<number>

export const { productAdd, productDelete } = productsSlice.actions;

export const selectProduct = (state: RootState) => state.products.products;

export default productsSlice.reducer;
