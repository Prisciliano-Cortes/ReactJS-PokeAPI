import { useEffect }      from 'react';
import { connect }        from 'react-redux';
import { FlapperSpinner } from "react-spinners-kit";
import { PokemonList }    from '../custom/PokemonList';
import { PokemonFilter }  from '../custom/PokemonFilter';
import { FilterPokemon, 
         GetAllPokemons } from '../../redux/actions/PokeSearchAction';

const PokemonListScreen = ({ GetAllPokemons, pokemons, FilterPokemon, filter }) => {

    useEffect(() => {
        GetAllPokemons();
        // eslint-disable-next-line
    }, []);

    const handleFilterChange = e => {
        const { value } = e.target;
        FilterPokemon(value);
    };

    const filteredPokemons = () => (
        filter === 'ALL' ? 
        pokemons 
        : 
        pokemons.filter(pokemon => {
            const arr = pokemon.types;

            for (let i = 0; i < arr.length; i += 1) {
                if (arr[i].type.name === filter) return true;
            }

            return false;
        }));

    return pokemons === null ? 
        <FlapperSpinner /> 
        : 
        (
            <>
                <PokemonFilter handleChange={handleFilterChange} />
                {filteredPokemons().map(pokemon => (
                    <PokemonList key={pokemon.id} pokemon={pokemon} />
                ))}
            </>
        );
};

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    filter: state.filter,
});

export default connect(mapStateToProps, { FilterPokemon, GetAllPokemons })(PokemonListScreen);