import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from 'redux-persist'

const myLogger = (store) => (next) => (action) => {
  console.log(`Action [${action.type}]`)
  console.log('before',store.getState());
  next(action);
  console.log('after',store.getState());
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

// const middleWares = [logger];
// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer,undefined,applyMiddleware(myLogger));

export const persistor = persistStore(store);