import {createSelector} from 'reselect';
import { CategoryMap } from './categories.types';
import { CATEGORY_STATE_TYPE } from './categories.reducer';

const selectCategoryReducer = (state):CATEGORY_STATE_TYPE => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories)=>{
    return categories.reduce((acc,category)=>{
      const {title,items} = category;
      acc[title.toLowerCase()] = items;
      return acc;
    },{} as CategoryMap);
  }
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=> categoriesSlice.isLoading
)

