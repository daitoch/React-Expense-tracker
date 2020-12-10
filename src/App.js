// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
import Balance from "./component/Balance"
import Income from "./component/Income"
import Transaction from "./component/Transaction"
import AddTransition from "./component/AddTransaction"

const App = () => {
  return (
    <div>
      <h2> Expense tracker</h2>
      <div className="container">
        <Balance />
        <Income />
        <Transaction />
        <AddTransition />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
