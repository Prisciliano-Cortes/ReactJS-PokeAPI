import axios     from 'axios';
import { types } from '../types/types';

// Acción para ver un pokemón específico de la tabla
export const DetailsPokemon = (url) => async (dispatch) => {

    if(url === undefined) return null;

    if(localStorage.getItem(url)){
        dispatch({
            type: types.InfoPokemon,
            payload: JSON.parse(localStorage.getItem(url))
        });

        return;
    }

    try {
        const resp = await axios.get(url)

        dispatch({
            type: types.InfoPokemon,
            payload: {
                nombre: resp.data.name,
                foto: resp.data.sprites.front_default,
            }
        });

        localStorage.setItem(url, JSON.stringify({
            nombre: resp.data.name,
            foto: resp.data.sprites.front_default,
        }));

    } catch (error) {
        console.log(error);
    }
}

// Acción para obtener todos los pokemones y mostrarlo en una tabla
export const GetAllPokemons = () => async (dispatch) => {

    if(localStorage.getItem('offset=0')){
        dispatch({
            type: types.GetPokemons,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        });

    }else{
        try {
            const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');

            dispatch({
                type: types.GetPokemons,
                payload: resp.data
            });

            localStorage.setItem('offset=0', JSON.stringify(resp.data));

        } catch (error) {
            console.log(error);
        }
    }
}

// Acción para ver el siguiente grupo de pokemones
export const ViewNextPokemon = () => async (dispatch, getState) => {
    const {next} = getState().Pokes

    if(localStorage.getItem(next)){
        dispatch({
            type: types.ViewNext,
            payload: JSON.parse(localStorage.getItem(next))
        });

    }else{
        try {
            const resp = await axios.get(next);

            dispatch({
                type: types.ViewNext,
                payload: resp.data
            });

            localStorage.setItem(next, JSON.stringify(resp.data));

        } catch (error) {
            console.log(error);
        }
    }   
}

// Acción para ver la lista anterior de pokemones
export const ViewPreviousPokemon = () => async (dispatch, getState) => {
    const {previous} = getState().Pokes

    if(localStorage.getItem(previous)){
        dispatch({
            type: types.ViewPrevious,
            payload: JSON.parse(localStorage.getItem(previous))
        });

    }else{
        try {
            const resp = await axios.get(previous);

            dispatch({
                type: types.ViewPrevious,
                payload: resp.data
            })

            localStorage.setItem(previous, JSON.stringify(resp.data));

        } catch (error) {
            console.log(error);
        }
    }
}  