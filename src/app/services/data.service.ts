import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getData(): Observable<User[]> {
    return of
      ([{ name: 'Serhii', title: 'Senior' }, { name: 'Dan', title: 'Middle' }])
  }
  getWelcomeWords(): string{
    return "Welcome";
  }
}
