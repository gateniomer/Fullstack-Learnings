import { Middleware } from "redux";

import { RootState } from "../store";

export const myLogger:Middleware<{},RootState> = (store) => (next) => (action) => {
  console.log(`Action [${action.type}]`)
  console.log('before',store.getState());
  next(action);
  console.log('after',store.getState());
}