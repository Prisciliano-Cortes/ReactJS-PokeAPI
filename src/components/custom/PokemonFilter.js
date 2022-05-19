import React     from 'react';
import { types } from '../../types/types';

export const PokemonFilter = ({ handleChange }) => {
    return (
        <div className='container-select'>
            <div className='row-container'>
                <div className='column-25'>
                    <label className='label-select'>SELECCIONE UN TIPO:</label>
                </div>
                <div className='column-75'>
                    <select name='types' className='option-select' onChange={handleChange}>
                        <option value='ALL'>TODOS</option>
                        { 
                            types.map(type => (
                                <option key={type} value={type}>
                                    { type.toUpperCase() }
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}