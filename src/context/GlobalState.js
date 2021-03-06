import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initailState = {
  transactions: [
    { id: 1, text: "Flower", amount: -30 },
    { id: 2, text: "Book", amount: -60 },
    { id: 3, text: "Salary", amount: 200 },
  ],
};

// Create context
export const GlobalContext = createContext(initailState);

// Create a provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
