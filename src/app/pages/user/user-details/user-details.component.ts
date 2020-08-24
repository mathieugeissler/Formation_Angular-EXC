import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/users/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user: User = {
    name: 'name',
    age: 10,
    city: 'city'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
