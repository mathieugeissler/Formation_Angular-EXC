import { User } from '../models/users/user';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL =
    'https://v2-api.sheety.co/b4f57d83b0ba4c9e62c19bc5c3061ac2/angularUsersBackend/users';

  constructor(private log: NGXLogger, private httpClient: HttpClient) {}

  /**
   * Get all Users
   */
  public getUsers(): Observable<Array<User>> {
    this.log.debug('Get users list', this);
    return this.httpClient
      .get<{ users: Array<User> }>(this.API_URL)
      .pipe(map((resp) => resp.users));
  }

  /**
   * Get one user by here username
   * @param username : username to get
   */
  public getUserByUsername(username: string): Observable<User> {
    this.log.debug('get user by username', username, this);
    return this.getUsers().pipe(
      map((users) => {
        const user = users.find((u) => u.name === username);
        if (!user) {
          throw new Error('User does not exist');
        }
        return user;
      })
    );
  }
}
