import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducer: {
    incriment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer libery,
      // which detects changes to a "darft state" and produces a brand new
      // immutable state based off those change
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrimentByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
