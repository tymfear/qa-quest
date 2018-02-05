import {routerReducer} from 'react-router-redux';
import pussyReducers from './pussyApp/reducers/PussyReducers';
import triangleReducers from './triangleApp/reducers/TriangleReducers';
import {combineReducers} from 'redux';
import {reducer as modal} from 'redux-modal';


export default combineReducers({
  pussyReducers,
  triangleReducers,
  router: routerReducer,
  modal,
});
