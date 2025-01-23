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
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    if (!(event.target as HTMLElement).closest('.group')) {
      this.isMenuOpen = false;
    }
  }
}
