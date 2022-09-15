import {SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILED} from '../constant/auth';

const INITIAL_STATE = {
  access_token: '',
  signInLoader: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {...state, signInLoader: true};
    case SIGN_IN_SUCCESS:
      return {...state, signInLoader: false, access_token: action.payload};
    case SIGN_IN_FAILED:
      return {...state, signInLoader: false};

    default:
      return state;
  }
};
