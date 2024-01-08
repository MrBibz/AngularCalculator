import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  result: string = '0';
  currentNumber: string = '';
  currentOperation: string = '';

  clearScreen(): void {
    this.result = '0';
    this.currentNumber = '';
    this.currentOperation = '';
  }

  updateCurrentNumber(value: string): void {
    if (this.result === '0' || this.result === '-0') {
      this.result = value;
    } else {
      this.result += value;
    }
  }

  operate(operation: string): void {
    this.currentNumber = this.result;
    this.result = '0';
    this.currentOperation = operation;
  }

  calculate() {
    const num1 = parseFloat(this.currentNumber);
    const num2 = parseFloat(this.result);

    switch (this.currentOperation) {
      case '+':
        this.result = (num1 + num2).toString();
        break;
      case '-':
        this.result = (num1 - num2).toString();
        break;
      case '*':
        this.result = (num1 * num2).toString();
        break;
      case '/':
        this.result = (num1 / num2).toString();
        break;
      case '%':
        this.result = (num1 % num2).toString();
        break;
      default:
        break;
    }

    this.currentNumber = '';
    this.currentOperation = '';
  }
}
