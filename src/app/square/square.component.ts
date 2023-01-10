import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: [
    'button {height: 100%; width: 100%; font-size:5em !important}'
  ]
})
export class SquareComponent {

  @Input() value!: "X" | "O";
}
