import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './components/App';


const renderApp = Component => {
    render(
        <AppContainer>
            <Router>
                <Component />
            </Router>
        </AppContainer>,
        document.getElementById('root')
    );
}

renderApp(App);

if (module.hot) {
    module.hot.accept('./components/App', () => { renderApp(App); });
}