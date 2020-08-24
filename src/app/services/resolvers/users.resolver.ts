import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../models/users/user';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<Array<User>> {
  constructor(
    private userService: UserService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<User>> | Promise<Array<User>> | Array<User> {
    return this.userService.getUsers().pipe(
      catchError(async (e) => {
        this.logger.error(e, this);
        await this.router.navigate(['/home']);
        return null;
      })
    );
  }
}
