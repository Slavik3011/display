import React from 'react';

import PreHeader from '../preHeader/PreHeader';
import LoginForm from '../loginForm/LoginForm';
import Filters from '../filters/Filters';
import PreFooter from '../preFooter/PreFooter';

export default () => (
    <div>
        <PreHeader title="Check Out Our work">
            <LoginForm />
        </PreHeader>
        <section className="gallery">
            <div className="container">
                <Filters />
            </div>
        </section>
        <PreFooter />
    </div>
)