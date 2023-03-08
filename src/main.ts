import './reset.scss'
import './style.scss'

import { Players, Encode, Board, Config } from './types'
import { renderBoard, renderCurrentPlayer } from './renders'
import { AI } from './ai'
import { User } from './user'

// import typescriptLogo from './typescript.svg'
  // refactor type
const boardConfig: Board = [
  Encode.Empty, Encode.Empty, Encode.Empty,
  Encode.Empty, Encode.Empty, Encode.Empty,
  Encode.Empty, Encode.Empty, Encode.Empty,
]

const players: Players = [ Encode.One, Encode.Two ]

const config: Config = {
  board: boardConfig,
  players: players,
  currentPlayer: players[0],
  moveCount: 0,
}

const app = document.querySelector('#app') as HTMLDivElement;

app.innerHTML = `<h1 class="heading">Typescript TicTacToe</h1>`

renderCurrentPlayer(app);
renderBoard(app);


const ai = new AI(players[1]);
const user = new User(players[0]);

user.play(config, () => ai.play(config));


