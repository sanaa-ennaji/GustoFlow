import { createSelector, createFeatureSelector } from '@ngrx/store';
import {CategoryState} from '../state/app.state';

export const selectCategoryState = createFeatureSelector<CategoryState>('categories');

export const selectAllCategories = createSelector(
  selectCategoryState,
  (state) => state.categories || []
);

export const selectCategoriesLoading = createSelector(
  selectCategoryState,
  (state) => state?.loading ?? false
);

export const selectCategoriesError = createSelector(
  selectCategoryState,
  (state) => state.error
);
