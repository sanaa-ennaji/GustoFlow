import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Table} from '../../../shared/models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TablesServiceService {

  constructor() { }

  private tables: Table[] = [
    { id: 1, seats: 4, status: 'available', position: 'top-0 left-1/4' },
    { id: 2, seats: 4, status: 'occupied', position: 'top-0 left-2/4' },
    { id: 3, seats: 6, status: 'available', position: 'top-0 right-1/4' },
    { id: 4, seats: 4, status: 'available', position: 'top-32 left-1/4' },
    { id: 5, seats: 8, status: 'available', position: 'top-32 left-2/4' },
    { id: 6, seats: 4, status: 'available', position: 'top-32 right-1/4' },
    { id: 7, seats: 4, status: 'available', position: 'top-64 left-1/4' },
    { id: 8, seats: 4, status: 'available', position: 'top-64 left-2/4' },
    { id: 9, seats: 4, status: 'available', position: 'top-64 right-1/4' }
  ];

  private tablesSubject = new BehaviorSubject<Table[]>(this.tables);

  getTables(): Observable<Table[]> {
    return this.tablesSubject.asObservable();
  }

  callWaiter(tableId: number): Observable<boolean> {
    return new Observable(subscriber => {
      setTimeout(() => {
        console.log(`Waiter called for table ${tableId}`);
        subscriber.next(true);
        subscriber.complete();
      }, 500);
    });
  }
}
