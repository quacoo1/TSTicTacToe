
  
export enum Encode {
    One = 'X',
    Two = 'O',
    Empty = '-',
}

export enum GameState {
    playing = 'PLAYING',
    end = 'END',
}

export type Players = [
    Encode.One,
    Encode.Two,
]

export type Board = [Encode, Encode, Encode, 
                 Encode, Encode, Encode, 
                 Encode, Encode, Encode ]
  
export interface Config {
    currentPlayer: Encode;
    board: Board; 
    moveCount: number;
    players: Players;
    gameState: GameState;
}

export interface Player{
    sign: Encode;
    play: (config: Config, next?: Next) => void;
}

export type Next = ()=> void