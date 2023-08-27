import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1; //OR, state.count += 1
    },
    decrement: (state) => {
      state.count = state.count - 1; //OR, state.count -= 1
    },
    // when we want to increment/decrement more than 1 such as 2,5,7 whatever, then we have to use payload...
    incrementByValue: (state, actions) => {
      state.count = state.count + actions.payload;
    },
    decrementByValue: (state, actions) => {
      state.count = state.count - actions.payload;
    },
  },
});

export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
