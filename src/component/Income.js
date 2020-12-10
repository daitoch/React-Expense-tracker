import React from "react";

const Income = () => {
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>+0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='exp-minus' className='exp minus'>-0.00</p>
            </div>
        </div>
    );
};

export default Income;