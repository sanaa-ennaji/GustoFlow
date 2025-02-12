import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RestaurantTablesComponent} from './features/tables/restaurant-tables/restaurant-tables.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RestaurantTablesComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gusto-flow';
}
