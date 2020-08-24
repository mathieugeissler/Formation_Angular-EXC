import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../../models/users/user';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Injectable({ providedIn: 'root' })
export class UserByNameResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    const userName = route.paramMap.get('username');
    return this.userService.getUserByUsername(userName).pipe(
      catchError((e) => {
        this.logger.error(e, userName, this);
        this.router.navigate(['/home']);
        return EMPTY;
      })
    );
  }
}
