import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  currentNumber = '0';
  selectedNumber: string = '';

  clearScreen() {
    this.currentNumber = '0';
  }

  updateCurrentNumber(value: string) {
    if (this.currentNumber === '0') {
      this.currentNumber = value;
    } else {
      this.currentNumber += value;
    }
  }
}
