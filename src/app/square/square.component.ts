import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [ngStyle]="{'background-image': getColor(value)}">{{value}}</button>
  `,
  styles: [
    'button {text-align: center;  height: 100%; width: 100%; font-size:5em !important}',
    'button:hover {box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1)}'
  ]
})
export class SquareComponent {

  @Input() value!:string;

  getColor(value:string){
    if(value === "X"){
      return 'linear-gradient(red, white)';
    } else if (value === "O"){
      return 'linear-gradient(blue, white)'
    } else {
      return 'linear-gradient(gray, white)';
    }
  }
}
