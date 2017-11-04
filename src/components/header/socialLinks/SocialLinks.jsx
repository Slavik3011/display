import React from 'react';

import Link from './Link';
import './socialLinks.sass';

const socialLinks = [
    {
        id: 1,
        link: 'https://twitter.com/',
        icon: ''
    },
    {
        id: 2,
        link: 'https://www.facebook.com/',
        icon: ''
    },
    {
        id: 3,
        link: 'https://www.upwork.com/ab/feed/jobs/rss?contractor_tier=1%2C2&subcategory2=web_development&sort=renew_time_int+desc&api_params=1&q=&securityToken=74f43a996f437856360af82eb1654cf0c5e320f0e3348aafd366b7d59be8293379f9a09532e63a460715d4d40533445a315ca59127e342411ac23b009012ebd3&userUid=667111598918172672&orgUid=667111598922366977',
        icon: ''
    },
    {
        id: 4,
        link: 'https://www.pinterest.com/',
        icon: ''
    },
    {
        id: 5,
        link: 'https://plus.google.com/',
        icon: ''
    },
    {
        id: 6,
        link: 'https://dribbble.com/',
        icon: ''
    }
];

export default () => {
    const links = () => socialLinks.map(link => <li><Link key={link.id} link={link} /></li>);

    return (
        <ul className="social-links">
            {links()}
        </ul>
    )
}
