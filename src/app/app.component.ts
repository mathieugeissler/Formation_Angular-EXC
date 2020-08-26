import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public users = [
    {
      name: 'John',
      age: 21,
      city: 'Strasbourg'
    },
    {
      name: 'Alice',
      age: 30,
      city: 'Paris'
    },
    {
      name: 'Mike',
      age: 12,
      city: 'Toulouse'
    },
    {
      name: 'Sarah',
      age: 52,
      city: 'Lille'
    }
  ];
}
