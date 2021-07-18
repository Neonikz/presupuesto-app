import React from 'react';

export const Expense = ({ expense }) => (
    <li className="gastos">
        <p>
            { expense.expenseName }

            <span className="gasto">$ { expense.expenseAmount }</span>
        </p>
    </li>
);
