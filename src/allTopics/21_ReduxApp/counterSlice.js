import { createSlice } from "@reduxjs/toolkit";

//! STEP 2: CREATE A SLICE?FEATURE
export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prev, action) => {
        console.log(action);
        
        return prev + action.payload;
    },
    decre: (prev, action) => {
        return prev > 0 ? prev - action.payload : 0
    },
    reset: (prev, action) => {
        console.log(prev, action);
        
        return 0
    },
  },
});

export const {incre, decre, reset} = counterSlice.actions

