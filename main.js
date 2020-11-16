
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.getElementById('.modal');
const scoreboard = {
    player: 0,
    computer: 0
};

// play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

//computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

//get game winner
function getWinner(p, c) {
    if (p === c) {
        return 'Draw';
    } else if (p === 'rock') {
        if (c === 'scissors') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (p === 'paper') {
        if (c === 'rock') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (p === 'scissors') {
        if (c === 'paper') {
            return 'player';
        } else {
            return 'computer';
        }
    }
};

//show winner
function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        // inc player score by 1
        scoreboard.player++;
        // show modal result
        result.innerHTML = `
        <h1 class="text-win">You WIN!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else if(winner === 'computer') {
        //inc player score by 1
        scoreboard.computer++;
        //show modal result
        result.innerHTML = `
        <h1 class="text-lose">Ouch. You LOSE.</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else {
        result.innerHTML = `
        <h1>Twinsies</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }
    //show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
        `;
    //ERROR below
    modal.style.display = 'block';
};

// restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}

// clear modal
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);



