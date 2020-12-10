import React, { createContext, useReducer } from "react";

const initailState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -30},
        { id: 2, text: 'Book', amount: -60},
        { id: 3, text: 'Salary', amount: 200}
    ]
}

// Create context
export const GlobalContext = createContext(initailState);