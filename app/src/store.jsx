import createHistory from 'history/createHashHistory';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';

const composeEnhancers = composeWithDevTools({});

const middleware = [];
middleware.push(promiseMiddleware());
middleware.push(thunk);
middleware.push(routerMiddleware(createHistory()));

if (process.env.ENV !== 'PROD') {
    const logger = createLogger({ diff: true });
    middleware.push(logger);
}

export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));
