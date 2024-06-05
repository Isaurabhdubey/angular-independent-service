import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-second',
  standalone: true,
  template: `
  <h1>Hello from {{ name }}!</h1>
  <button (click)="increase()">click Here {{counterService.count}}</button>
  `,
  providers: [CounterService],
})
export class AppSecondComponent {
  name = 'Angular 2';
  constructor(readonly counterService: CounterService) {}
  increase = () => console.log(this.counterService.increaseCount());
}
