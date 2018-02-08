import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { I18nextProvider } from 'react-i18next';
import { AppContainer } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import store from './store';
import i18n from './i18n';
import Routes from './Routes';

const history = createHistory();

if (module.hot) {
    module.hot.accept();
}

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <I18nextProvider i18n={i18n}>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Route component={Routes} />
                    </ConnectedRouter>
                </Provider>
            </I18nextProvider>
        </AppContainer>,
        document.getElementById('app'),
    );
};

render();
