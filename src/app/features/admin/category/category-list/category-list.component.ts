import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { Category } from '../../../../shared/models/category.model';
import { selectAllCategories, selectCategoriesLoading } from '../../../../store/selectors/category.selectors';
import { addCategory, loadCategories } from '../../../../store/actions/category.actions';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    CategoryFormComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Category[]>;
  loading$: Observable<boolean>;
  showForm: boolean = false;
  selectedCategory: Category | null = null;
  private store = inject(Store);

  constructor() {
    this.categories$ = this.store.select(selectAllCategories);
    this.loading$ = this.store.select(selectCategoriesLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.categories$.subscribe(categories => {
      console.log('✅ Catégories récupérées dans le composant:', categories);
    });
  }

  // Ouvre le formulaire en passant la catégorie sélectionnée (ou null pour ajout)
  openForm(category: Category | null): void {
    this.selectedCategory = category ? { ...category } : { id: null, name: '' };
    this.showForm = true;
  }

  // Ferme le formulaire
  closeForm(): void {
    this.showForm = false;
    this.selectedCategory = null;
  }

  // Ajoute la catégorie (action dispatchée)
  onFormSubmit(newCategory: Category): void {
    this.store.dispatch(addCategory({ category: newCategory }));
    this.closeForm();
  }
}
