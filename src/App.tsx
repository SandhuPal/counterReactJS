// Your task is to complete the implementation of the counter application by:
// Defining the reducer function to handle the increment and decrement actions.
// Creating the increment and decrement action creators.
// Implementing the Counter component logic to display the current counter value and dispatch the increment and decrement actions.
// Rendering the Counter component inside the Provider component from the Redux library.
// You should demonstrate your understanding of Redux concepts such as actions, reducers, the Redux store, and the usage of React-Redux hooks (useSelector and useDispatch).

import { useState } from "react"
import { useAppDispatch } from "./app/hooks"
import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

 // counter.js
const initialState = {
  value: 0,
}
// Define your reducer function here
const counter = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

  // Define your action creators here
  // store.js
  const { increment, decrement } = counter.actions

  const Counter = () => {
      const dispatch = useAppDispatch()
      const count = useSelector((state:any) => state.counter.value)

    return (
      <div>
        <h1>Counter</h1>
        <p>Current Value: {count}</p >
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    );
  };

const App = () => {
  return (    
        <Counter />
  )
}

export default App
