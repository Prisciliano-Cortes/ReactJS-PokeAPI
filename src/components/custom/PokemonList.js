import React from 'react';

export const PokemonList = ({ pokemon }) => {
    return (
        <div className='body'>
            <ul className="card-container">
                <li className="card-img">
                    <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                        alt='Pokemones' 
                    />
                    <h1>{pokemon.name}</h1>
                </li>
            </ul>
        </div>
    )
}