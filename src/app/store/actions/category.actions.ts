import { createAction, props } from '@ngrx/store';
import {Category} from '../../shared/models/category.model';


// action pour afficher les catégories
export const loadCategories = createAction(
  '[Category] Load Categories'
);

export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: any[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Category] Load Categories Failure',
  props<{ error: any }>()
);

// action pour ajouter une catégorie.

export const addCategory = createAction(
  '[Category] Add Category',
  props<{ category: Category }>()
);

export const addCategorySuccess = createAction(
  '[Category] Add Category Success',
  props<{ category: Category }>()
);

export const addCategoryFailure = createAction(
  '[Category] Add Category Failure',
  props<{ error: string }>()
);
