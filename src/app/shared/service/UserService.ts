import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, delay, first, map, take } from "rxjs/operators";
import { IUserList } from "src/app/feature/auth/model/IUserList";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor () {}

  getUsers (): Observable<IUserList[]> {
    return of([
      {
        userId: '1',
        username: 'johnbrown',
        name: 'John Brown',
        roles: 0,
        status: 0
      },
      {
        userId: '2',
        username: 'jimgreen',
        name: 'Jim Green',
        roles: 1,
        status: 1
      },
      {
        userId: '3',
        username: 'user',
        name: 'Joe Black',
        roles: 1,
        status: 2
      }
    ]).pipe(
      delay(1000),
      catchError(error => throwError(error))
    )
  }

  getUser(userId: string) {
    return this.getUsers().pipe(
      map(result => result.find(data => data.userId === userId)),
      catchError(error => throwError(error))
    )
  }
}