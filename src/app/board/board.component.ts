import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] = Array(9).fill(null);
  winner!: string;
  xIsNext: boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.winner = "";
    this.xIsNext = true;
    this.squares = Array(9).fill(null);
  }
  get player() {
    return this.xIsNext ? "O" : "X"
  }
  makeMove(idx: number) {
    if (!this.winner && !this.squares[idx]) {
      this.squares.splice(idx, 1, this.player)
      this.xIsNext = !this.xIsNext;
      this.winner = this.calcWinner();
    }
  }
  calcWinner() {
    let winning_series = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2, 5, 8], // columns
      [0,4,8],[2,4,6] // diagonals
    ]
    let out = "";
    winning_series.forEach((series)=>{
      if(
        this.squares[series[0]] &&
        this.squares[series[0]] ===  this.squares[series[1]] &&
        this.squares[series[1]] ===  this.squares[series[2]]
      ){
      console.log(series);
      console.log(this.squares[series[0]]);
      out = this.squares[series[0]];
    }
   })
   return out;
  }

}
