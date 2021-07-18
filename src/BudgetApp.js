import React, { useEffect, useState } from 'react';
import { BudgetControl } from './components/BudgetControl';
import { ExpensesList } from './components/ExpensesList';
import { Form } from './components/Form';
import { Question } from './components/Question';

export const BudgetApp = () => {

    //State del presupuesto
    const [budget, setBudget] = useState(0);

    //State del restante
    const [remaining, setRemaining] = useState(0);

    //State de los gastos
    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState({});
    const [createExpense, setCreateExpense] = useState(false);

    //State para mostrar el Question component o el Form component
    const [showQuestion, setShowQuestion] = useState(true);

    //useEffect que actualiza el restante 
    useEffect(() => {

        if( createExpense ){
            //Agregar los nuevos gastos
            setExpenses([
                ...expenses,
                expense
            ]);

            //Resta del presupuesto actual
            const budgetRemaining = remaining - expense.expenseAmount;
            setRemaining( budgetRemaining );

            setCreateExpense( false );
        }


    }, [ expense, setExpenses, expenses, remaining, createExpense ]);


    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>

                <div className="contenido-principal contenido">
                    { showQuestion 
                        ? ( 
                        <Question
                            setBudget={ setBudget }
                            setRemaining={ setRemaining }
                            setShowQuestion={ setShowQuestion }
                        />
                        )
                        : ( 
                        <div className="row">
                            <div className="one-half column">
                                <Form 
                                    setExpense={ setExpense }
                                    setCreateExpense={ setCreateExpense }
                                />
                            </div>

                            <div className="one-half column">
                                <ExpensesList
                                    expenses={ expenses }
                                />

                                <BudgetControl 
                                    budget={ budget }
                                    remaining={ remaining }
                                />
                            </div>
                        </div>
                        )
                    }
                </div>
            </header>
        </div>
    )
}
