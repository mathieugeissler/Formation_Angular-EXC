import { User } from '../models/users/user';
import { UsersMock } from '../mocks/users';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL =
    'https://v2-api.sheety.co/b4f57d83b0ba4c9e62c19bc5c3061ac2/angularUsersBackend/users';

  constructor(private log: NGXLogger) {}

  /**
   * Get all Users
   */
  public getUsers(): Array<User> {
    this.log.debug('Get users list', this);
    return UsersMock;
  }

  /**
   * Get one user by here username
   * @param username : username to get
   */
  public getUserByUsername(username: string): User {
    this.log.debug('get user by username', username, this);
    return UsersMock.find((u) => u.name === username);
  }
}
