import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransition = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const submitTransaction =  (e) => {
    e.preventDefault();
    const transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    }
    addTransaction(transaction);
    setText('');
    setAmount(0);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onBlur={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransition;
