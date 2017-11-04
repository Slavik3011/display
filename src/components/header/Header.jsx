import React from 'react';

import Logo from './logo/Logo';
import SocialLinks from './socialLinks/SocialLinks';
import './header.sass';

export default () => (
    <header>
        <div className="container">
            <Logo />
            <SocialLinks />
        </div>
    </header>
)