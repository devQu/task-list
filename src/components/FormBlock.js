import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function CustomHookAdd(defaultName='') {
    const [valueperson, setValuePerson] = useState(defaultName)

    return {
        bind: {
            value: valueperson,
            onChange: event => setValuePerson(event.target.value)
        },
        clear: () => setValuePerson(''),
        value: () => valueperson
    }
} 

function FormBlock(props) {

    const changerMot = function(e) {
        console.log(e.target.value)
    }

    const [view, setView] = useState(true); // pour montrer ou cacher le Composant
    
    const montrer = () => setView(!view);

    const hook = CustomHookAdd('') // '' par default

    function callAjout(e) {
        e.preventDefault()
        props.onAddTache(hook.value())
        hook.clear()
    }

    if (view === true) {
        return (
            <div>
                <div>My name is {props.name}</div>
                <button onClick={props.myFunc.bind(this, props.name)}>Dire un Merci!</button>
                <button onClick={montrer}>Cachez tout!</button>
                <input onChange={changerMot}></input>
                <div>
                    <form onSubmit={callAjout}>
                        <input {...hook.bind}></input>
                        <button type="submit">Ajouter une tache!</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={montrer}>Monter ca!</button>
            </div>
        )
    }
}

FormBlock.propTypes = {
    myFunc: PropTypes.func.isRequired,
    onAddTache: PropTypes.func.isRequired
}

export default FormBlock