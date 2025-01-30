import {Component, inject, OnInit} from '@angular/core';
import {selectAllCategories, selectCategoriesLoading} from '../../../../store/selectors/category.selectors';
import {Category} from '../../../../shared/models/category.model';
import {Store} from '@ngrx/store';
 //   import {addCategory, deleteCategory, loadCategories, updateCategory} from '../../../../store/actions/category.actions';
import {Observable} from 'rxjs';
import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import {CategoryFormComponent} from '../category-form/category-form.component';
import {loadCategories} from '../../../../store/actions/category.actions';

@Component({
  selector: 'app-category-list',
  imports: [
    AsyncPipe,
    CommonModule,
    CategoryFormComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './category-list.component.html',
  standalone: true,
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]> | undefined;
  showForm = false;
  selectedCategory: Category | null = null;
  loading$: Observable<boolean> | undefined;
  private store = inject(Store);

  constructor() {
    this.categories$ = this.store.select(selectAllCategories);
    this.loading$ = this.store.select(selectCategoriesLoading);
  }
  ngOnInit(): void {
    this.store.dispatch(loadCategories());

    this.categories$ = this.store.select(selectAllCategories);

    this.categories$.subscribe(categories => {
      console.log('✅ Catégories récupérées dans le composant:', categories);
    });
  }



  openForm(category: Category | null) {
    this.selectedCategory = category; // Remplit le formulaire si update
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.selectedCategory = null;
  }
/*

  addCategory(category: Category) {
    this.store.dispatch(addCategory({ category }));
  }

  updateCategory(category: Category) {
    this.store.dispatch(updateCategory({ category }));
  }

  deleteCategory(categoryId: string) {
    this.store.dispatch(deleteCategory({ categoryId }));
  }
*/

}
