import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const myLogger = (store) => (next) => (action) => {
  console.log(`Action [${action.type}]`)
  console.log('before',store.getState());
  next(action);
  console.log('after',store.getState());
}
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

//root-reducer
export const store = createStore(rootReducer,undefined,applyMiddleware(myLogger));