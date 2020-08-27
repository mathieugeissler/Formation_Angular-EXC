import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-test-mock',
  templateUrl: './test-mock.component.html',
  styleUrls: ['./test-mock.component.scss'],
})
export class TestMockComponent implements OnInit {
  @Input()
  public message: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.message = this.userService.isLoggedIn
      ? 'Welcome old friend'
      : 'Please log in.';
  }
}
