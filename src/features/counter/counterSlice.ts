import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface CounterState {
  countProducts: number;
  countPrice: number;
}

const initialState: CounterState = { countPrice: 0, countProducts: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.countProducts += 1;
      state.countPrice += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.countProducts -= 1;
      state.countPrice -= action.payload;
    },
  },
});

// , action: PayloadAction<number>

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
