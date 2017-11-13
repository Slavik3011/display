import React from 'react';
import { Route } from 'react-router-dom';

import Header from './header/Header';
import Nav from './nav/Nav';
import Home from './home/Home';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import 'normalize.css';
import './app.sass';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Footer />
            </div>
        )
    }
}

