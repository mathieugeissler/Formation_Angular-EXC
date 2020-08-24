import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  username: string;

  @Input()
  age: number;

  @Input()
  city: string;

  @Output()
  ageChange = new EventEmitter<number>();

  resetAge(): void {
    this.age = 21;
    this.ageChange.emit(this.age);
  }

}
