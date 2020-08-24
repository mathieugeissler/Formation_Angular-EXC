import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public user = {
    name: 'John',
    age: 21,
    city: 'Strasbourg'
  };

  setAge(age: number): void {
    this.user.age = age;
  }

  randomizeUserAge(): void {
    this.setAge(Math.floor(Math.random() * 60) + 10);
  }
}
