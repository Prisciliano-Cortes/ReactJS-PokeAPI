import React, { useEffect }         from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsPokemon }           from '../../redux/actions/PokemonAction';

const ViewPokeScreen = () => {

    const dispatch = useDispatch()

    const { unPokemon: poke } = useSelector(store => store.Pokes )

    useEffect(() => {
        const ViewDetailsPokes = () => {
            dispatch( DetailsPokemon() )
        }

        ViewDetailsPokes();
    }, [dispatch])

    return poke ? (
        <div className='container'>
            <div className='diamond'>
                <img className='image' alt={poke.nombre} src={poke.foto} />
            </div>
            <h2 className='name-poke'>{poke.nombre}</h2>
        </div>
    ) : null
}

export default ViewPokeScreen