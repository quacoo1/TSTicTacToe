
  
export enum Encode {
    One = 'X',
    Two = 'O',
    Empty = '-',
}

export type Players = [
    Encode.One,
    Encode.Two,
]

export type Board = [Encode, Encode, Encode, 
                 Encode, Encode, Encode, 
                 Encode, Encode, Encode ]
  
export type Config = {
    currentPlayer: Encode;
    board: Board; 
    moveCount: number;
    players: Players;
}
  