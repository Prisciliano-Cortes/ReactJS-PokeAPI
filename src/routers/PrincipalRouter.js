import React                            from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu }                         from '../components/menu/Menu';
import { NotFount }                     from '../components/notfound/NotFount';
import { PokemonScreen }                from '../components/views/PokemonScreen';
import PokemonListScreen                from '../components/views/PokemonListScreen';

export const PrincipalRouter = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/">
                    <Route index element={ <PokemonScreen /> } />
                    <Route path="search" element={ <PokemonListScreen /> } />
                    <Route path="*" element={ <NotFount /> } />
                </Route>
            </Routes>
        </BrowserRouter>    
    )
}