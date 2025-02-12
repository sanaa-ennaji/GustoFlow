import {Component, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {Category} from '../../../../shared/models/category.model';
import EventEmitter from 'node:events';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  // Déclare l'entrée pour recevoir la catégorie à modifier ou ajouter
  @Input() selectedCategory: Category = { id: null, name: '' };

  @Output() categorySubmit = new EventEmitter<Category>();
  @Output() formClose = new EventEmitter<void>();


  submitForm(): void {
    if (!this.selectedCategory.name.trim()) { return; }
    this.categorySubmit.emit(this.selectedCategory);
  }

  onFormClose(): void {
    this.formClose.emit();
  }

}
