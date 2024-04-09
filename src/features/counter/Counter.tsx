import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  decrement,
  increment,
  selectCount,
} from "./counterSlice"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div>
      <div >
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count">
          {count}
        </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

    </div>
  )
}
