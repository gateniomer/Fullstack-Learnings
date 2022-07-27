import { takeLatest,all,call,put } from "typed-redux-saga/macro";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess,fetchCategoriesFaild } from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try{
//     const categories = await getCategoriesAndDocuments('categories');
//     dispatch(fetchCategoriesSuccess(categories));
//   }catch(error){
//     dispatch(fetchCategoriesFaild(error));
//   }
// }

export function *fetchCategoriesAsync(){
    try{
    const categories = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categories));
  }catch(error){
    yield* put(fetchCategoriesFaild(error as Error));
  }
}

export function* onFetchCategories(){
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga(){
  yield* all([call(onFetchCategories)]);
}