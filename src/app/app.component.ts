import { Component } from '@angular/core';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {SideBarComponent} from './shared/components/side-bar/side-bar.component';
import {CategoryListComponent} from './features/admin/category/category-list/category-list.component';
import {RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, NavBarComponent, FooterComponent, SideBarComponent, CategoryListComponent, RouterOutlet],
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

