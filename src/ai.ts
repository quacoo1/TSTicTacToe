import { Config, Encode } from './types';
import { renderSelectedSquare } from './renders';

export class AI {

    sign: Encode;

    constructor(sign: Encode){
        this.sign = sign
    }

    calculateMove(move: number): number{
        return move + Math.floor(Math.random() * (9 - move));       
    }
    
    play(config: Config) :void{
        const move =  this.calculateMove(config.moveCount);
        const square = document.querySelector(`[data-position="${move}"]`) as HTMLElement;
        
        config.board[move] = Encode.Two;
        config.moveCount += 1;
        config.currentPlayer =  config.players[config.moveCount % 2];
        renderSelectedSquare(square, this.sign);
    }
}