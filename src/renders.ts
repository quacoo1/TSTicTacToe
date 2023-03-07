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