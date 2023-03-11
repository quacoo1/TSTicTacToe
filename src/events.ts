import { Config, Encode, GameState } from "./types";
import { AI } from "./ai";
import { User } from "./user";


function checkWinner(config: Config, sign: Encode): void{
    for(let row = 0; row < config.board.length; row += 3){
        if( config.board[row] === sign && 
            config.board[row + 1] === sign && 
            config.board[row + 2] === sign) { winState(config, sign) }
    }

    for(let column = 0; column < config.board.length; column++){
        if( config.board[column] === sign && 
            config.board[column + 3] === sign && 
            config.board[column + 6] === sign) { winState(config, sign) }
    }

    
    if( config.board[0] === sign && 
        config.board[4] === sign && 
        config.board[8] === sign) { winState(config, sign) }
  
    if( config.board[2] === sign && 
        config.board[4] === sign && 
        config.board[6] === sign) { winState(config, sign) }

    if (!config.board.includes(Encode.Empty) && config.gameState !== GameState.end){ winState(config, Encode.Empty) };
}

export function gameLoop( config: Config ): void{

    const user = new User(config.players[0]);
    const ai = new AI(config.players[1]);

    user.play(config, () =>{

        checkWinner(config, Encode.One);

        ai.play(config, () => checkWinner(config, Encode.Two));
    
    });
}

function winState(config: Config, sign: Encode): void{
    config.gameState = GameState.end;
    const overlay = document.querySelector('.board__overlay') as HTMLElement;
    if(sign === Encode.One){
        overlay.textContent = 'You win'
    }

    if(sign === Encode.Two){
        overlay.textContent = 'You Lose'
    }

    if(sign === Encode.Empty){
        overlay.textContent = 'You Draw'
    }
    
    overlay.classList.add('board__overlay--show');
}