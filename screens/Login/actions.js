import {Alert} from 'react-native';

import {LOGIN, SET_USER_INFO} from './constants';
import API from '../../utils/apiConfig';
import request from '../../utils/request';

export const setUserInfo = user => ({
  type: SET_USER_INFO,
  user,
});

export const doLogin = (email, password) => async dispatch => {
  try {
    const url = `${API.link}/user/login`;
    const body = {
      email,
      password
    };
    const option = {
      method: 'POST',
      body: JSON.stringify(body),
    };
    const data = await request(url, option);
    dispatch(setUserInfo(data));
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    Alert.alert(error.message)
    throw error
  }
};

