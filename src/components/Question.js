import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Error } from './Error';


export const Question = ({ setBudget, setRemaining, setShowQuestion }) => {

    //Definir el state de la cantidad
    const [values, handleInputChange] = useForm(0);
    const { amount } = values;
    const [error, setError] = useState(false);


    //Submit del form
    const handleSubmit = e => {
        e.preventDefault();

        //Pasamos de string a number el amount
        parseInt( amount );

        //Validacion
        if( amount < 1 || isNaN( amount )){
            setError( true );
            return;
        }

        //Si pasa la validacion
        setError(false); 

        // Guardamos la cantidad en el presupuesto y en el restante
        setBudget( amount );
        setRemaining( amount );

        //Ocultamos el componente
        setShowQuestion( false );
    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>   

            {/* Mensaje de error */}
            { error && <Error message="El presupuesto es incorrecto" /> }

            <form 
                onSubmit={ handleSubmit }
            >
                <input 
                    type="number"
                    className="u-full-width"
                    name="amount"
                    placeholder="Coloca tu presupuesto"
                    onChange={ handleInputChange }
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    )
}
