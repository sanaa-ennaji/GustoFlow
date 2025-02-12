import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-waiter-call-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './waiter-call-dialog.component.html',
  styleUrls: ['./waiter-call-dialog.component.css']
})
export class WaiterCallDialogComponent {
  constructor(
    public dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: { tableId: number }
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
