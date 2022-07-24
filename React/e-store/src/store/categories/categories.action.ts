import { createAction,Action,ActionWithPayload } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES,Category } from "./categories.types"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { withMatcher } from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,Category[]>;
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,Error>;

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));


export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]):FetchCategoriesSuccess => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray));


export const fetchCategoriesFaild = withMatcher((error: Error):FetchCategoriesFailed => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error));


