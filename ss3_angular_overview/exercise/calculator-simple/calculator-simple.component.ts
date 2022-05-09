import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-simple',
  templateUrl: './calculator-simple.component.html',
  styleUrls: ['./calculator-simple.component.css']
})
export class CalculatorSimpleComponent implements OnInit {
  number1 : number = 0;
  number2 : number = 0;
  result?: any;
  calculator?: string;

  cal(number: number) {
    if (number === 1) {
      this.result = this.number1 + this.number2;
    } else if (number === 2) {
      this.result = this.number1 - this.number2;
    } else if (number === 4) {
      if (this.number2 === 0) {
        this.result = 'Không thể chia cho 0';
      } else {
        this.result = this.number1 / this.number2;
      }
    } else if (number === 3) {
      this.result = this.number1 * this.number2;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
