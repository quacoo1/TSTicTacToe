enum encode {
  first = 'X',
  second = 'O',
  empty = '-'
}
type Config = [ encode, encode, encode, 
                encode, encode, encode, 
                encode, encode, encode ]


function squareClickHandler(event: any): void{
  event.target.classList.add('square--player-one')
}

export function squareClickListen( config: Config ): void{
  const squares: NodeListOf<HTMLDivElement> = document.querySelectorAll('.square');
  
  squares.forEach(element => {
    element.addEventListener('click', squareClickHandler)
  })
}