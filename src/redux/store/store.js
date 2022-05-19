import thunk                   from 'redux-thunk';
import {createStore, 
        combineReducers, 
        applyMiddleware}       from 'redux';
import {composeWithDevTools}   from 'redux-devtools-extension';
import { PokemonReducer }      from '../reducers/PokemonReducer';
import { PokeListReducer }     from '../reducers/PokeListReducer';
import { PokeMultipleReducer } from '../reducers/PokeMultipleReducer';

const rootReducer = combineReducers({
    Pokes: PokemonReducer,
    filter: PokeListReducer,
    pokemon: PokeMultipleReducer,
});

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store;
};