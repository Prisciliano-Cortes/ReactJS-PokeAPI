import { types } from '../types/types';

// Estado Inicial
const InitialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
}

// Reducer para traer todos los pokemones, dar siguiente, anterior y el pokemon especifico
export const PokemonReducer = (state = InitialState, action) => {
    switch(action.type){
        case types.GetPokemons:
            return {
                ...state, 
                ...action.payload
            }

        case types.ViewNext:
            return {
                ...state, 
                ...action.payload
            }
        
        case types.ViewPrevious:
            return {
                ...state, 
                ...action.payload
            }
        
        case types.InfoPokemon:
            return {
                ...state, 
                unPokemon: action.payload
            }
            
        default:
            return state
    }
};