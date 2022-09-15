import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import auth from '../reducer/auth';
import invoice from '../reducer/invoice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistedConfig,
  combineReducers({
    auth,
    invoice,
  }),
);

const initialState = {};
const middleware = [thunk];
const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);
const persistor = persistStore(store);

export {persistor, store};
