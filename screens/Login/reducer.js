import {SET_USER_INFO} from './constants';

export const user = (state = null, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.user;
    default:
      return state;
  }
};