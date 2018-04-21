import { NavigationActions } from 'react-navigation';
import RootNavigator from '../navigation/RootNavigator';

const initialSate = RootNavigator.router.getStateForAction(NavigationActions.init());

export const nav = (state = initialSate, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
