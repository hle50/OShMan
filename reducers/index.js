import { combineReducers } from 'redux';

import {nav} from './nav';
import {user} from '../screens/Login/reducer';
import {alert} from './alert';

export  default combineReducers({
  nav,
  user,
  alert
})
