import { User } from '../models/users/user';
import { UsersMock } from '../mocks/users';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
