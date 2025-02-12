import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tables-management',
  imports: [
    NgForOf,
    NgClass,
    FormsModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './tables-management.component.html',
  styleUrl: './tables-management.component.css',
  standalone: true
})
export class TablesManagementComponent implements OnInit {
  tables = [
    { id: 1, seats: 4, status: 'available' },
    { id: 2, seats: 4, status: 'occupied' },
    { id: 3, seats: 6, status: 'available' },
    { id: 4, seats: 4, status: 'available' },
    { id: 5, seats: 8, status: 'available' },
  ];
  showModal = false;
  newTable = {
    id: 8,
    seats: 4,
    status: 'available',
  };

  constructor() {}

  ngOnInit(): void {}

  toggleTableStatus(table: any): void {
    table.status = table.status === 'available' ? 'occupied' : 'available';
  }

  addTable(): void {
    this.tables.push({ ...this.newTable });
    this.newTable = { id: 8, seats: 4, status: 'available' };
    this.showModal = false;
  }
}
