import {Plate}  from "./plate.model"
export interface Category {
  id: string;
  name: string;
  plates: Plate[];
}