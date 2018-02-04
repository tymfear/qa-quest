import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import {composeWithDevTools} from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import Routes from './Routes'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware)));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
