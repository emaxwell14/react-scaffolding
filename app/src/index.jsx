import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import Main from './Main/Main';
import Header from './Header/Header';
import store from './store';

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);
const history = createHistory();
render(
    (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('app'),
);
