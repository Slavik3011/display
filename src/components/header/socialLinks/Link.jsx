import React from 'react';
import FontAwesome from 'react-fontawesome';

import './link.sass';

export default ({ link }) => (<a className="social-link" href={link.link} target="_blank">
    <FontAwesome name={link.icon}  />
</a>);
