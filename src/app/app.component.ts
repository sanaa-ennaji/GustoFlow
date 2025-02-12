import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RestaurantTablesComponent} from './features/tables/restaurant-tables/restaurant-tables.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RestaurantTablesComponent, NavBarComponent, FooterComponent],
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

