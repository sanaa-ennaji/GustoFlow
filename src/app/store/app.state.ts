import { User } from '../shared/models/user.model';
import { Plate } from '../shared/models/plate.model';

export interface AppState {
  users: User[];
  plates: Plate[];
}
