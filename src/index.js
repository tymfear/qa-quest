import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import MainApp from './MainApp';
import PussyApp from './pussyApp';
import PussyAppAdminArea from './pussyApp/AdminArea';
import MemberArea from './pussyApp/MemberArea';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {composeWithDevTools} from 'redux-devtools-extension';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware)));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={MainApp}/>
        <Route exact path='/pussy' component={PussyApp}/>
        <Route exact path='/pussy/member' component={MemberArea}/>
        <Route exact path='/pussy/admin' component={PussyAppAdminArea}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
