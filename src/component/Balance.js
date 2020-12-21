import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map(transaction => 
    transaction.amount
  )
  

  return (
    <div>
      <h4>Balance</h4>
      <h1 id="balance">$0.00</h1>
    </div>
  );
};

export default Balance;
