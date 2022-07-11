export const myLogger = (store) => (next) => (action) => {
  console.log(`Action [${action.type}]`)
  console.log('before',store.getState());
  next(action);
  console.log('after',store.getState());
}