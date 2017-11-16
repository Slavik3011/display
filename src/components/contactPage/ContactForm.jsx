import React from 'react';

import FormInput from './FormInput';
import Textarea from './Textarea';
import './contactForm.sass';

export default () => {
    const handleSubmit = e => {
        e.preventDefault();

        console.log('submit');
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h3>Contact Form</h3>
            <FormInput name="name" placeholder="Name" />
            <FormInput type="email" name="email" placeholder="Email Address" />
            <FormInput name="subject" placeholder="Subject" />
            <Textarea name="message" />
            <button>Send Message</button>
        </form>
    )
}