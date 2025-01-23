import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { WaiterCallDialogComponent } from '../waiter-call-dialog/waiter-call-dialog.component';
import {TableComponent} from '../tables/tables.component';
import {Table} from '../../../shared/models/table.model';
import {TablesServiceService} from '../service/tables-service.service';

@Component({
  selector: 'app-restaurant-tables',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './restaurant-tables.component.html',
  styleUrls: ['./restaurant-tables.component.css']
})
export class RestaurantTablesComponent {
  private dialog = inject(Dialog);
  private tableService = inject(TablesServiceService);

  tables$ = this.tableService.getTables();

  onTableSelect(table: Table): void {
    if (table.status === 'available') {
      const dialogRef = this.dialog.open(WaiterCallDialogComponent, {
        data: { tableId: table.id },
        width: '400px'
      });

      dialogRef.closed.subscribe(result => {
        if (result) {
          this.tableService.callWaiter(table.id).subscribe();
        }
      });
    }
  }
}
