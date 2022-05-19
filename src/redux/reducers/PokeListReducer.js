import { types } from '../types/types';

// Reducer para filtrar los pokemones
export const PokeListReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case types.PokeChangeFilter:
            return action.filter
        
        default:
            return state;
    }
};