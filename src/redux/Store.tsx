import {legacy_createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthReducer} from './reducers/AuthReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, AuthReducer);

export const store = legacy_createStore(persistedReducer);
export const persistor = persistStore(store);
