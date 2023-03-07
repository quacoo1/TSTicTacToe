import './reset.scss'
import './style.scss'

import { renderBoard } from './renders'
import { squareClickListen } from './events'

// import typescriptLogo from './typescript.svg'


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

// refactor type
const boardConfig: Board = [
  encode.empty, encode.empty, encode.empty,
  encode.empty, encode.empty, encode.empty,
  encode.empty, encode.empty, encode.empty,
]

const config = {
  player: Player.one,
  board: boardConfig,
}



const app = document.querySelector('#app') as HTMLDivElement;

app.innerHTML = `<h1 class="heading">Typescript TicTacToe</h1> <h3 id="turn">player 1</h3>`

renderBoard(app)
squareClickListen(config)
