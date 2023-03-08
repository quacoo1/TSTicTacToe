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

export function renderCurrentPlayer(element: HTMLElement): void{
  const cPlayerSection = document.createElement('div') as HTMLDivElement;
  const cPlayerValue = document.createElement('span') as HTMLDivElement
  
  cPlayerSection.classList.add('turn');

  cPlayerValue.classList.add('turn__value');
  cPlayerValue.textContent = Encode.One;


  cPlayerSection.innerHTML = 'Current Player -> &nbsp';

  cPlayerSection.appendChild(cPlayerValue);

  element.appendChild(cPlayerSection);
}

export function renderPlayerChange(playerNum: Encode): void{
  const cPlayerValue = document.querySelector('.turn__value') as HTMLElement;
  cPlayerValue.textContent = `${playerNum}`;  
}
