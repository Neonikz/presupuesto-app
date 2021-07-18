import React from 'react';
import { checkBudget } from '../helpers/checkBudget';

export const BudgetControl = ({ budget, remaining }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: ${ budget }
            </div>

            <div className={ checkBudget( budget, remaining) }>
                Restante: ${ remaining }
            </div>   
        </>
    )
}
