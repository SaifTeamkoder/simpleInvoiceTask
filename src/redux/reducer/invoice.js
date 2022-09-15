import {
  FETCH_INVOICE_START,
  FETCH_INVOICE_SUCCESS,
  FETCH_INVOICE_FAILED,
  //
  CREATE_INVOICE_START,
  CREATE_INVOICE_SUCCESS,
  CREATE_INVOICE_FAILED,
} from '../constant/invoice';

const INITIAL_STATE = {
  fetchedInvoiceData: [],
  fetchInvoiceLoader: false,
  fetchInvoicePageLoader: false,
  fetchInvoiceTotalPages: '',
  //
  createInvoiceLoader: false,
};
import {concat} from 'lodash';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_INVOICE_START:
      if (action.payload.pageNum === 1) {
        return {...state, fetchInvoiceLoader: true};
      } else {
        return {...state, fetchInvoicePageLoader: true};
      }
    // return {...state, fetchInvoiceLoader: true};
    case FETCH_INVOICE_SUCCESS:
      return {
        ...state,
        fetchInvoiceLoader: false,
        fetchInvoicePageLoader: false,
        fetchedInvoiceData: concat(state.fetchedInvoiceData, action.payload), //action.payload,
        fetchInvoiceTotalPages: action.payload.paging.pageNumber
      };
    case FETCH_INVOICE_FAILED:
      return {
        ...state,
        fetchInvoiceLoader: false,
        fetchInvoicePageLoader: false,
      };
    //
    case CREATE_INVOICE_START:
      return {...state, createInvoiceLoader: true};
    case CREATE_INVOICE_SUCCESS:
      return {...state, createInvoiceLoader: false};
    case CREATE_INVOICE_FAILED:
      return {...state, createInvoiceLoader: false};
    //
    default:
      return state;
  }
};
