import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  count: number;
  constructor() {
    this.count = 0;
  }
  increaseCount = () => this.count++;
}
