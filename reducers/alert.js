import {SET_ALERT_STATUS} from '../constants'

export const alert = (state = true, action) => {
  switch (action.type) {
    case 'SET_ALERT_STATUS':
      return action.status;
    default:
      return state;
  }
};