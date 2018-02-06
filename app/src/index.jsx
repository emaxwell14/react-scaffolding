import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './Main/Main';
import Header from './Header/Header';
import store from './store';

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('app'),
);
