import { CATEGORIES_ACTION_TYPES,Category } from "./categories.types";
import { CategoryAction, fetchCategoriesStart, fetchCategoriesSuccess,fetchCategoriesFaild } from "./categories.action";
import { AnyAction } from "redux";
export type CATEGORY_STATE_TYPE = {
  readonly categories: Category[],
  readonly isLoading: boolean,
  readonly error: Error | null
}
const INITIAL_STATE: CATEGORY_STATE_TYPE = {
  categories: [],
  isLoading: false,
  error: null
}

export const categoriesReducer = (state = INITIAL_STATE,action = {} as AnyAction) =>{

  if(fetchCategoriesStart.match(action)){
    return {...state, isLoading: true};
  }
  if(fetchCategoriesSuccess.match(action)){
    return {...state, categories: action.payload, isLoading: false};
  }
  if(fetchCategoriesFaild.match(action)){
    return {...state, isLoading: false, error: action.payload};
  }

  return state;
  // switch(action.type){
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return {...state, isLoading: true};
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
  //     return {...state, isLoading: false, error: action.payload};
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
  //     return {...state, categories: action.payload, isLoading: false};
  //   default:
  //     return state;
  // }
}