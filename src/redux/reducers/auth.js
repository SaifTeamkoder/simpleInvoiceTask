import {
  DEVICE_TOKEN,
} from '../constants/auth.constants';

const INITIAL_STATE = {

  device_token: '',

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEVICE_TOKEN:
      return { ...state, device_token: action.payload };

    default:
      return state;
  }
};
