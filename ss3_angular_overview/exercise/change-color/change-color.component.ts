import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {
  colorRange : number;
  color : string;

  changeColor(colorRange: number) {
    switch (colorRange) {
      case 0 :
        this.color = 'red';
        break;
      case 1:
        this.color = 'black';
        break;
      case 2:
        this.color = 'green';
        break;
      case 3:
        this.color = 'blue';
        break;
      case 4:
        this.color = 'pink';
        break;
      case 5:
        this.color = 'orange';
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
