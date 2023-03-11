import { Config, Encode, Next, Player, GameState  } from './types';
import { renderSelectedSquare, renderPlayerChange} from './renders';

export class AI implements Player{

    sign: Encode;
    emptySquares: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];


    constructor(sign: Encode){
        this.sign = sign
    }

    pickRandomIndex(max: number): number{
        return Math.floor(Math.random() * max);
    }

    calculateMove(config: Config): number | null{
        this.emptySquares = this.emptySquares.filter((squareNumber) => {
            return config.board[squareNumber] === Encode.Empty;
        });
        
        if(this.emptySquares.length !== 0){
            const index = this.pickRandomIndex(this.emptySquares.length);
            return this.emptySquares[index];
        }
    
        return null
    }
    
    play(config: Config, next?: Next) :void{
        
        if(config.gameState === GameState.playing)
        {
            const move: number | null =  this.calculateMove(config);
        
            if(move !== null){
                const square = document.querySelector(`[data-position="${move}"]`) as HTMLElement;
                config.board[move] = Encode.Two;
                config.moveCount += 1;
                config.currentPlayer =  config.players[config.moveCount % 2];
                renderPlayerChange(config.currentPlayer)
                renderSelectedSquare(square, this.sign);
                if(typeof next !== 'undefined') next();
            }
        }

    }
}