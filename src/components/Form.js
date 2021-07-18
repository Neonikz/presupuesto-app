import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Error } from './Error';
import shortid from 'shortid';

export const Form = ({ setExpense, setCreateExpense }) => {

    //Manejo del formulario
    const [ values, handleInputChange, reset ] = useForm({
        expenseName:'',
        expenseAmount:0
    });
    const { expenseName, expenseAmount } = values; 

    //Manejo del error
    const [error, setError] = useState( false );

    //Submit del form cuando el usuario agrega un gasto
    const handleSubmit = e => {
        e.preventDefault();

        //Pasar de string a number el expenseAmount
        parseInt( expenseAmount );

        //Validar
        if( expenseAmount < 1 || isNaN( expenseAmount ) || !expenseName.trim() ){
            setError( true );
            return;
        }
        setError( false );

        //Construir el gasto
        const expense = {
            expenseName,
            expenseAmount,
            id: shortid.generate()
        }

        //Pasar el gasto al componente principal
        setExpense( expense );
        setCreateExpense( true );

        //Resetear el form
        reset();
    }
 


    return (
        <form
            onSubmit={ handleSubmit }
        >
            <h2>Agrega tus gastos aqui</h2>

            { error && <Error message="Ambos campos son obligatorios o presupuesto incorrecto" /> }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    name="expenseName"
                    placeholder="Ej. Transporte"
                    value={ expenseName }
                    onChange={ handleInputChange }  
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    name="expenseAmount"
                    placeholder="Ej. 300"
                    value={ expenseAmount }
                    onChange={ handleInputChange }  
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}
