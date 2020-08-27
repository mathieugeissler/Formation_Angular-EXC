import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input()
  isOn = false;

  @Output()
  isOnChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  clicked(): void {
    this.isOn = !this.isOn;
    this.isOnChange.emit(this.isOn);
  }
}
