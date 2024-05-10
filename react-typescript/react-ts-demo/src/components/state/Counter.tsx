import { useReducer, useState } from "react";

const initialState = { count: 0 };

type CounterState = {
  count: number;
};

type CounterAction = {
  type: "increment" | "decrement";
  payload: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "increment":
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement by 10
      </button>
    </>
  );
};
