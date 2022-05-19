import { types } from '../types/types';

const initialState = {
    pokemons: [],
    pokemon: {},
    loading: true,
};
  
// Reducer para obtener todos los pokemones
export const PokeMultipleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PokeGetAll:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
            }

        default:
            return state;
    }
}