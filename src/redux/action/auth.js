import api, {setAuthHeader} from '../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../../navigation/rootNavigation.js';
import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
} from '../constant/auth.js';
var qs = require('qs');

export const signIn = (values, navigation) => async dispatch => {
  dispatch({type: SIGN_IN_START});
  //
  var data = qs.stringify({
    client_id: 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
    client_secret: '0Exp4dwqmpON_ezyhfm0o_Xkowka',
    grant_type: 'password',
    scope: 'openid',
    username: values.email,
    password: values.password,
  });
  //
  api
    .post(`/token`, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(r => {
      AsyncStorage.setItem('accessToken', r.data.access_token).then(async () => {
        await setAuthHeader(r.data.access_token);
        dispatch({type: SIGN_IN_SUCCESS, payload: r.data.access_token});
        navigation.reset({
          routes: [{name: 'Home'}],
        });
      });
    })
    .catch(e => {
      dispatch({type: SIGN_IN_FAILED});
    });
};
