import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../../models/users/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class UserByNameResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    const userName = route.paramMap.get('username');

    const user = this.userService.getUserByUsername(userName);
    if (!user) {
      this.router.navigate(['/404']);
    }
    return user;
  }
}
