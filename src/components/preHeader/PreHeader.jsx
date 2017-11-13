import React from 'react';

import './preHeader.sass';

export default ({ title, children }) => (
    <div className="pre-header">
        <div className="container">
            <h2>{title}</h2>
            {children}
        </div>
    </div>
)
