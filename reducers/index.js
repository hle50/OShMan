import { combineReducers } from 'redux';

import { nav } from './nav';
import { user } from '../screens/Login/reducer';
import { loading } from './loading';

export default combineReducers({
  nav,
  user,
  loading
})
