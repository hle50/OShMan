import {SET_LOADING_STATUS} from '../constants'

export const loading = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return action.status;
    default:
      return state;
  }
};