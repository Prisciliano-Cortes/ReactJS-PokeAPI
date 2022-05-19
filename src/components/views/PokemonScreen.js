import React                        from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewPokeScreen               from './ViewPokeScreen';
import { DetailsPokemon, 
        GetAllPokemons, 
        ViewNextPokemon, 
        ViewPreviousPokemon }       from '../../redux/actions/PokemonAction';


export const PokemonScreen = () => {

    const dispatch = useDispatch();

    const results = useSelector( state => state.Pokes.results );
    const next = useSelector(store => store.Pokes.next );
    const previous = useSelector(store => store.Pokes.previous );;

    return (
        <div>
            <div className='title'>
                <h2>Lista de Pokemones</h2>
            </div>

            <div className='principal'>
                <div className="options">
                    <div className='actions'>
                        {
                            results.length === 0 && 
                            <button 
                                onClick={() => dispatch( GetAllPokemons() )} 
                                className="btn btn-secondary"
                            >
                                obtener pokemones
                            </button>
                        }
                        {
                            previous && 
                            <button 
                                onClick={() => dispatch( ViewPreviousPokemon() )}
                                className="btn btn-primary ml-1 mr-1 mt-1 mb-1"
                            >
                                Anterior
                            </button>
                        }
                        {
                            next && 
                            <button 
                                onClick={() => dispatch( ViewNextPokemon() )}
                                className="btn btn-primary ml-1 mr-1 mt-1 mb-1"
                            >
                                Siguiente
                            </button>
                        } 
                    </div>
                </div>

                <div className="main-pokes">
                    {
                        results.length !== 0 ?
                        <table>
                            <thead>
                                <tr>
                                    <th>POKEMÓN</th>
                                    <th>ACCIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.map((item) => (
                                        <tr key={item.name}>
                                            <td> {item.name.toUpperCase()} </td>
                                            <td>
                                                <button 
                                                    onClick={() => dispatch(DetailsPokemon(item.url))}
                                                    className="btn btn-dark"
                                                >
                                                    <i className="fa-solid fa-eye fa-2xl"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        : ''
                    }
                </div>

                <div className="view-pokes">
                    <ViewPokeScreen />
                </div>
            </div>
        </div>
    )
}