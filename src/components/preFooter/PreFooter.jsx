import React from 'react';
import { Link } from 'react-router-dom';

import './preFooter.sass';

export default () => (
    <div className="pre-footer">
        <div className="container">
            <h3>Are You impressed by our creativity?</h3>
            <Link to="/contact#contact">Contact us right now</Link>
        </div>
    </div>
)