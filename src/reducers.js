import {routerReducer} from 'react-router-redux';
import pussyReducers from './pussyApp/reducers'
import {combineReducers} from 'redux';


export default combineReducers({
  pussyReducers,
  router: routerReducer,
});
