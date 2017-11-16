import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header/Header';
import Nav from './nav/Nav';
import Home from './home/Home';
import Contact from './contactPage/ContactPage';
import Footer from './footer/Footer';
import 'normalize.css';
import './app.sass';

import { loadProjects } from 'actions';


class App extends React.Component {
    componentDidMount() {
        this.props.loadProjects()
    }

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

export default connect( null, {
    loadProjects
} )(App)

