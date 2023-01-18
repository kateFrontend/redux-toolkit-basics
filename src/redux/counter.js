// Here will contain information about our initial state wich will be zero, because we want to create a counter. 
// Also it will be a few actions and reducers

import { createSlice } from '@reduxjs/toolkit' // This function gives us access to the state and gives the system instructions on how to change this state.

const initialState = {
  count: 0,  // we can use any word here (ex.: count, value, number etc.), but we need to change it everywhere
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1  // increment state by 1
    },
    decrement: (state) => {
      state.count -= 1  // decrement state by 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer