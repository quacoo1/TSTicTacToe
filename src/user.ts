import { Encode, Config } from "./types";
import { renderSelectedSquare, renderPlayerChange } from "./renders";

type Next = ()=> void

export class User{
    sign: Encode;
  
    constructor(sign: Encode){
      this.sign = sign;
    }
  
    #squareClickHandler(event: any, config: Config, next?: Next): void{
      const square = event.target as HTMLElement;
      
      const position = Number(square.dataset.position);
      
      if(config.board[position] ===  Encode.Empty){
        
        config.board[position] = this.sign;
        config.moveCount += 1;
        config.currentPlayer =  config.players[config.moveCount % 2];
        renderSelectedSquare(square, this.sign);
        renderPlayerChange(config.currentPlayer);
        if(typeof next !== 'undefined') next();
      
      }
    }
    
  
    play(config: Config, next?: Next): void{
      const squares: NodeListOf<HTMLDivElement> = document.querySelectorAll('.square');
    
      squares.forEach(element => {
        element.addEventListener('click', (event) => { 
            if(config.currentPlayer ===  this.sign){
                this.#squareClickHandler(event, config, next);
            }
        });
      })

    }

  }