//Gana el jugador que primero llega a 100 puntos. Cada vez que lanzas el dado acumulas puntos en tu turno. Los puntos del turno "pasan a tu cuenta" cuanto le cedes el turno a tu contrincante. Si sacas un 1, pierdes los puntos del turno (no los acumulados) y el turno se cede de forma obligatoria.

//Variables
var score, roundScore, activePlayer, gamePlaying;

init();

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    hideDice();
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Jugador 1';
    document.getElementById('name-1').textContent = 'Jugador 2';
}



    //Función para lanzar el dado
    document.querySelector('.btn--roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1; //Genera un número aleatorio entre 1 y 6
    var diceDOM = document.querySelector('.dice'); //Selecciona el elemento con clase .dice
    diceDOM.style.display = 'block'; //Muestra el elemento
    diceDOM.src = 'dice-' + dice + '.png'; //Cambia la imagen del dado
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
    }
  
});


//Función para pasar el turno con boton hold
document.querySelector('.btn--hold').addEventListener('click', function() {
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    if (score[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Has ganado!!';
        hideDice();
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('Ganador');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
        nextPlayer();
    }

}

//Función para cambiar de jugador
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    hideDice();
}

//Función para ocultar el dado
function hideDice() {
    document.querySelector('.dice').style.display = 'none';
}

          






}

