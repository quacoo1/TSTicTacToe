import { Encode } from "./types";

export function renderBoard(element: HTMLDivElement): void{ 
  const board = document.createElement('div') as HTMLDivElement;
  board.classList.add('board');

  for(let position = 0; position < 9; position++){
    const square = document.createElement('div') as HTMLDivElement; 
    square.classList.add('square');
    square.dataset.position = `${position}`;
    board.appendChild(square);
  }

  element.appendChild(board);
}

export function renderSelectedSquare(target: HTMLElement,sign: Encode): void{
  if(sign === Encode.One){
    target.classList.add('square--player-one');
    target.classList.remove('square--player-two');
  }

  if(sign === Encode.Two){
    target.classList.add('square--player-two');
    target.classList.remove('square--player-one');
  }
}