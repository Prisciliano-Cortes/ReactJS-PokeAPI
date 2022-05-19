import axios     from 'axios';
import { types } from '../types/types';

export const GetAllPokemons = () => async dispatch => {
    try {
        const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');

        const pokemonData = await Promise.all(allPokemon.data.results.map(async pokemon => {
            const pokemonRecord = await axios.get(pokemon.url);
            return pokemonRecord.data;
        }));

        dispatch({
            type: types.PokeGetAll,
            payload: pokemonData,
        });

    } catch (err) {
        dispatch({ err });
    }
};

export const FilterPokemon = filter => ({
    type: types.PokeChangeFilter,
    filter,
});