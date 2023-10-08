/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

export const CartContext = createContext({
  products: [],
  dispatch: (action) => {
    console.log(action);
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "inc":
      return state.map((it) =>
        it.id === action.payload ? { ...it, count: it.count + 1 } : it
      );
    case "dec":
      return state.map((it) =>
        it.id === action.payload ? { ...it, count: it.count - 1 } : it
      );
    case "reset":
      return [];

    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ products: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
