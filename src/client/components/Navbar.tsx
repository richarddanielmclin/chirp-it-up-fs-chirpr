import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = props => {
    return (
        <nav className="nav justify-content-center align-items-center p-3 mb-4 shadow">
            <NavLink className={isActive =>
                "nav-link border-bottom border-secondary text-danger" + (!isActive ? " unselected" : "")
            } to='/'>Home</NavLink>
            <NavLink className={isActive =>
                "nav-link border-bottom border-secondary text-danger" + (!isActive ? " unselected" : "")
            } to='/compose'>Compose</NavLink>
        </nav>

    );
}

interface NavbarProps { }

export default Navbar;