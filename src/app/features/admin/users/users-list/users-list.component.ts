import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  standalone: true,
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  openCardId: number | null = null;

  toggleMenu(cardId: number): void {
    this.openCardId = this.openCardId === cardId ? null : cardId;
  }
}
