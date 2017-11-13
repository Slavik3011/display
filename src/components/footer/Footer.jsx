import React from 'react';
import { Link } from 'react-router-dom';

import './footer.sass';

export default () => {
    return (
        <footer>
            <div className="container">
                <p>Copyright 2013 Display. All Rights Reserved.</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}