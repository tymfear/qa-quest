import {routerReducer} from 'react-router-redux';
import pussyReducers from './pussyApp/reducers'
import triangleReducers from './triangleApp/reducers'
import {combineReducers} from 'redux';


export default combineReducers({
  pussyReducers,
  triangleReducers,
  router: routerReducer,
});
