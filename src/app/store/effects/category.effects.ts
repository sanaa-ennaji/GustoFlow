import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadCategories,
  loadCategoriesSuccess,
  loadCategoriesFailure,
  addCategory,
  addCategorySuccess, addCategoryFailure
} from '../actions/category.actions';
import {CategoryService} from '../../core/Services/category.service';

@Injectable()
export class CategoryEffects {

  private actions$: Actions = inject(Actions);
  private categoryService: CategoryService = inject(CategoryService) ;

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(loadCategories),
    mergeMap(() => this.categoryService.getCategories()  // Assurez-vous que getCategories() retourne un Observable
      .pipe(
        map(categories => loadCategoriesSuccess({ categories })),
        catchError(() => EMPTY)
      ))
  ));

  addCategory$ = createEffect(() => this.actions$.pipe(
    ofType(addCategory),
    mergeMap(action => this.categoryService.addCategory(action.category)
      .pipe(
        map(category => addCategorySuccess({ category })),
        catchError(error => [addCategoryFailure({ error })])
      ))
  ));




}
