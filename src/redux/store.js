import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import auth from './reducers/auth';

const appReducer = combineReducers({
  auth
});

const middleware = [ReduxThunk];
const store = createStore(appReducer, {}, applyMiddleware(...middleware));

export default store;
