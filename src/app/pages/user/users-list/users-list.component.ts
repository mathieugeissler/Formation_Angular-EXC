import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users/user';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users$: Observable<Array<User>>;
  private users: Array<User>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users$ = this.route.data.pipe(
      map((data) => {
        this.users = data.users;
        return this.users;
      })
    );
  }
}
