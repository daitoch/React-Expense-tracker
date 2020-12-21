import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transcation";

const transaction = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((trans) => (
          <Transaction transaction={trans} />
        ))}
      </ul>
    </div>
  );
};

export default transaction;
