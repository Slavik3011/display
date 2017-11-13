import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.sass';

export default () => {
    return (
        <nav>
            <div className="container">
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}