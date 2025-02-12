import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Table} from '../../../shared/models/table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TableComponent {
  @Input() table!: Table;
  @Output() tableClick = new EventEmitter<Table>();

  getTableClasses(): string {
    return `table-block ${this.table.status === 'available' ? 'table-available' : 'table-occupied'}`;
  }

  onTableClick(): void {
    this.tableClick.emit(this.table);
  }
}
