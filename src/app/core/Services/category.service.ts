import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Category} from '../../shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/api/public/category';
 // console.log(this.apiUrl);
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/all`).pipe(
      tap(categories => console.log('Données API:', categories))
    );
  }
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}`, category);
  }

}
