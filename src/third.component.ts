import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-third',
  standalone: true,
  template: `
  <h1>Hello from {{ name }}!</h1>
  <button (click)="increase()">click Here {{counterService.count}}</button>
  `,
  providers: [CounterService],
})
export class AppThirdComponent {
  name = 'Angular 3';
  constructor(readonly counterService: CounterService) {}
  increase = () => {
    console.log(this.counterService.increaseCount());
  };
}
