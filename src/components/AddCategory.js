import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = e => setInputValue( e.target.value );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    const handleReset = () => setCategories([]);

    return (
        <form onSubmit= { handleSubmit }>

            <input
                type="search"
                value={ inputValue }
                onChange={ handleInputValue }
                placeholder="Buscar..."
            />
            <button className="find-btn" onClick={ handleSubmit }> Buscar </button>
            <button className="reset-btn" onClick={ handleReset }> Reset </button>

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}