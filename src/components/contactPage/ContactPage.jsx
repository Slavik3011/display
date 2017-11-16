import React from 'react';

import PreHeader from '../preHeader/PreHeader';
import MyMapComponent from './MyMapComponent';
import ContactForm from './ContactForm';
import './contactPage.sass';

export default () => (
    <div>
        <PreHeader title="Got a Question or INquiry?" />
        <MyMapComponent containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}/>
        <section className="contact" id="contact">
            <div className="container">
                <ContactForm />
            </div>
        </section>
    </div>
)