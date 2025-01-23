import { User } from '../../shared/models/user.model';
import { Plate } from '../../shared/models/plate.model';
import { Category } from '../../shared/models/category.model';
import { Table } from '../../shared/models/table.model';
export interface AppState {
  users: UserState;
  plates: PlateState;
  categories: CategoryState;
  tables: TableState;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

export interface PlateState {
  plates: Plate[];
  loading: boolean;
  error: string | null;
}

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export interface TableState {
  tables: Table[];
  loading: boolean;
  error: string | null;
}
