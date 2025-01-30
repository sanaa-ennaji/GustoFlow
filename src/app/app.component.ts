import { Component } from '@angular/core';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from './shared/components/side-bar/side-bar.component';
import {UsersListComponent} from './features/admin/users/users-list/users-list.component';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, SideBarComponent, UsersListComponent,CommonModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gusto-flow';
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}

