import {createReducer, on} from '@ngrx/store';
import {initialState} from '../state/category.state';
import * as CategoryActions from '../actions/category.actions';
import {addCategory, addCategoryFailure, addCategorySuccess} from '../actions/category.actions';
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
  })),
  // Action pour ajouter une catégorie
  on(addCategory, (state) => ({
    ...state,
    loading: true
  })),

  // Action lorsque l'ajout d'une catégorie est réussi
  on(addCategorySuccess, (state, { category }) => ({
    ...state,
    loading: false,
    categories: [...state.categories, category]  // Ajout de la nouvelle catégorie au tableau
  })),

  // Action en cas d'échec lors de l'ajout d'une catégorie
  on(addCategoryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
