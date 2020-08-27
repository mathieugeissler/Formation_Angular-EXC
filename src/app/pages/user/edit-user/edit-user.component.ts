import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users/user';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public currentUser$: Observable<User>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentUser$ = this.route.data.pipe(map((data) => data.user));
  }

  updateUser(value: User): void {
    console.log(value);
  }

  isAdult(age: number): boolean {
    return age >= 18;
  }
}
