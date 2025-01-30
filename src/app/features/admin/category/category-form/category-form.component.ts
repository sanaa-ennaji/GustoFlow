import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {Category} from '../../../../shared/models/category.model';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class CategoryFormComponent implements OnInit {
  @Input() category: Category | null = null;
  @Output() formClosed = new EventEmitter<void>(); // Renommé pour éviter le conflit

  newCategory: Category = { id: '', name: ''};

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (this.category) {
      this.newCategory = { ...this.category };
    }
  }

  /*onSubmit() {
    if (this.newCategory.id) {
      this.store.dispatch(updateCategory({ category: this.newCategory }));
    } else {
      this.newCategory.id = this.generateId();
      this.store.dispatch(addCategory({ category: this.newCategory }));
    }

    this.resetForm();
    this.formClosed.emit(); // Ferme le formulaire après soumission
  }

  closeForm() {
    this.formClosed.emit(); // Utilisation du nouveau nom
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  resetForm() {
    this.newCategory = { id: '', name: '', plates: [] };
  }*/
}
