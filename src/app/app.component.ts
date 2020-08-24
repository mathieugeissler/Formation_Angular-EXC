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
  };

  public city = 'Strasbourg';
}
