import { Routes } from '@angular/router';
import {RestaurantTablesComponent} from './features/tables/restaurant-tables/restaurant-tables.component';
import {TablesManagementComponent} from './features/tables/tables-management/tables-management.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tables', pathMatch: 'full' },
  { path: 'tables', component: RestaurantTablesComponent },
  { path: 'tables-gestion', component: TablesManagementComponent },
];
