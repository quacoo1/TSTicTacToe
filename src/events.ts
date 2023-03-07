enum Player {
  one = "ONE",
  two = "TWO",
}

enum encode {
  first = 'X',
  second = 'O',
  empty = '-',
}

type Board = [encode, encode, encode, 
               encode, encode, encode, 
               encode, encode, encode ]

type Config = {
  player: Player;
  board: Board; 
}

function squareClickHandler(event: any, config: Config): void{
  const square = event.target as HTMLElement;
  

  if(typeof square.dataset.position === 'string'){
    const position = Number(square.dataset.position);
    
    //try catch
    config.board[position] = (config.player === Player.one)? encode.first : encode.second;
  }

  if(config.player === Player.one) {
    config.player = Player.two;
    square.classList.add('square--player-one');
    square.classList.remove('square--player-two');
  } else {
    config.player = Player.one; 
    square.classList.add('square--player-two');
    square.classList.remove('square--player-one');
  }

}

export function squareClickListen( config: Config ): void{
  const squares: NodeListOf<HTMLDivElement> = document.querySelectorAll('.square');
  
  squares.forEach(element => {
    element.addEventListener('click', (event) => squareClickHandler(event, config));
  })
}