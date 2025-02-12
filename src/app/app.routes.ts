import { Routes } from '@angular/router';
import {RestaurantTablesComponent} from './features/tables/restaurant-tables/restaurant-tables.component';
import {TablesManagementComponent} from './features/tables/tables-management/tables-management.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AppComponent } from './app.component';
import {CategoryListComponent} from './features/admin/category/category-list/category-list.component';
import {PlatesListComponent} from './features/admin/plates/plates-list/plates-list.component';
import { HomepageComponent } from './features/homepage/homepage.component';
export const routes: Routes = [
  {path: '', component: HomepageComponent},
  { path: 'tables', component: RestaurantTablesComponent },
  { path: 'tables-gestion', component: TablesManagementComponent },
    {path: 'login', component: LoginComponent},
    { path: 'admin/categories', component: CategoryListComponent },
    { path: 'admin/plates', component: PlatesListComponent }
];
