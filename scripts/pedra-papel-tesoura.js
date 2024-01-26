let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; 

updateScoreElement();

/*
if(!score) { // score = null? se sim, false, !false = true
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }    
}
*/


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'tesoura') {
        if(computerMove === 'pedra') {
            result = 'Você perdeu ;-;';
        }
        else if(computerMove === 'papel') {
            result = 'Você ganhou! :D';
        }
        else {
            result = 'Empate -_-';
        }
    }

    else if(playerMove === 'papel') {
        if(computerMove === 'pedra') {
            result = 'Você ganhou! :D';
         }
        else if(computerMove === 'papel') {
            result = 'Empate -_-';
        }
        else {
            result = 'Você perdeu ;-;';
        }
    }
    
    else if(playerMove === 'pedra') {
        if(computerMove === 'pedra') {
            result = 'Empate -_-';
        }
        else if(computerMove === 'papel') {
            result = 'Você perdeu ;-;';
        }
        else {
            result = 'Você ganhou! :D';
        }    

    }
    
    if(result === 'Você ganhou! :D') {
        score.wins += 1;
    }
    else if(result === 'Você perdeu ;-;') {
        score.losses += 1;
    }
    else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `Você
<img src="imagens/${playerMove}-emoji.png" alt="emoji" class="move-icon">
<img src="imagens/${computerMove}-emoji.png" alt="emoji" class="move-icon">
Computador`

}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'pedra';    
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'papel';
    }
    else {
        computerMove = 'tesoura';
    }   

    return computerMove;
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Vitórias: ${score.wins}, Derrotas: ${score.losses}, Empates: ${score.ties}`;
}