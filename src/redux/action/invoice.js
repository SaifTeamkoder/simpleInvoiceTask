import api, {setAuthHeader} from '../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../../navigation/rootNavigation.js';
import {
  FETCH_INVOICE_START,
  FETCH_INVOICE_SUCCESS,
  FETCH_INVOICE_FAILED,
  //
  CREATE_INVOICE_START,
  CREATE_INVOICE_SUCCESS,
  CREATE_INVOICE_FAILED,
} from '../constant/invoice';
var qs = require('qs');

export const fetchInvoice = (data, navigation) => async dispatch => {
  dispatch({type: FETCH_INVOICE_START, payload: data.pageNo});
  //
  api
    .get(
      '/invoice-service/1.0.0/invoices?pageNum=' +
        `${data.pageNo}` +
        '&pageSize=10&dateType=' +
        `${data.invoiceDate}` +
        '&sortBy=' +
        `${data.createdDate}` +
        '&ordering=' +
        `${data.listOrder}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(async r => {
      dispatch({type: FETCH_INVOICE_SUCCESS, payload: r.data});
    })
    .catch(e => {
      dispatch({type: FETCH_INVOICE_FAILED});
    });
};

export const createInvoice = (data, navigation) => async dispatch => {
  dispatch({type: CREATE_INVOICE_START});
  //
  api
    .post('invoice-service/2.0.0/invoices', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(async r => {
      console.log(r);
      dispatch({type: CREATE_INVOICE_SUCCESS});
    })
    .catch(e => {
      console.log('🚀 ~ file: auth.js ~ line 37 ~ signIn ~ e', e);
      dispatch({type: CREATE_INVOICE_FAILED});
    });
};
