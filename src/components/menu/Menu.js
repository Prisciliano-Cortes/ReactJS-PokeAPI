import React       from 'react';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
    return (
        <div className="menu-ambur-resp">
            <input type="checkbox" />
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
            <nav>
                <NavLink to='/'>NOMBRE POKEMÓN</NavLink> 
                <NavLink to='/search'>TIPO POKEMÓN</NavLink> 
            </nav>
        </div>
    )
}