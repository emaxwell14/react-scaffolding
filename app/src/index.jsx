import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { I18nextProvider } from 'react-i18next';
import Main from './Main/Main';
import Header from './Header/Header';
import store from './store';
import i18n from './i18n';

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);
const history = createHistory();
render(
    (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        </I18nextProvider>
    ),
    document.getElementById('app'),
);
