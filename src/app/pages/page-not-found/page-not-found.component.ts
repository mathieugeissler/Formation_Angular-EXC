import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<p>Go <a routerLink="/home">home</a> you're drunk</p>`
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
