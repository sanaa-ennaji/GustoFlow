import {createReducer, on} from '@ngrx/store';
import {initialState} from '../state/category.state';
import * as CategoryActions from '../actions/category.actions';
export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategoriesSuccess, (state, { categories }) => {
    console.log('✅ Reducer - mise à jour des catégories:', categories);
    return { ...state, loading: false, categories };
  }),
  on(CategoryActions.loadCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
