import { Category } from './category.model';
export interface Plate {
  id: string;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  category: Category;
}
