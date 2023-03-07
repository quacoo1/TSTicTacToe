import './reset.scss'
import './style.scss'

import { renderBoard } from './renders'
import { squareClickListen } from './events'

// import typescriptLogo from './typescript.svg'

type Config = [encode, encode, encode, 
               encode, encode, encode, 
               encode, encode, encode ]

enum encode {
  first = 'X',
  second = 'O',
  empty = '-'
}


// refactor type
const boardConfig: Config = [
  encode.empty, encode.empty, encode.empty,
  encode.empty, encode.empty, encode.empty,
  encode.empty, encode.empty, encode.empty,
]

const app = document.querySelector('#app') as HTMLDivElement;

app.innerHTML = `<h1 class="heading">Typescript TicTacToe</h1>`

renderBoard(app)
squareClickListen(boardConfig)
