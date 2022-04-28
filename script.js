'use strict';
// Variables for score recieved from the dice
let score_1 = 0;
let score_2 = 0;

// Variable for total score
let original_score_1 = 0;
let original_score_2 = 0;

// Variables
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceStyle = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

// Functionality for new game
btnNew.addEventListener('click', function () {
    score_1 = 0;
    score_2 = 0;
    original_score_1 = 0;
    original_score_2 = 0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    score0.innerHTML = 0;
    score1.innerHTML = 0;
    current0.innerHTML = 0;
    current1.innerHTML = 0;
    diceStyle.style.opacity = '0';
});

// Dice should be vanished in start of the game
diceStyle.style.opacity = '0';

// Scores should be zero in start
score0.innerHTML = 0;
score1.innerHTML = 0;

// Functionality of dice
btnRoll.addEventListener('click', function () {
    const dice = Math.trunc((Math.random() * 6) + 1);
    diceStyle.style.opacity = '1';
    diceStyle.src = `dice-${dice}.png`;

    // Functionality active player for player 1
    if (player0.classList[2] === 'player--active') {
        // Functionality when dice returns 1
        if (dice === 1) {
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
            current0.innerHTML = 0;
            original_score_1 -= score_1;
            score_1 = 0;
            dice = 0;
        }
        // Functionality when dice return any number beside 1;
        else {
            score_1 += dice;
            original_score_1 += dice;
            current0.innerHTML = score_1;
        }
    }

    // Functionality active player for player 2
    if (player1.classList[2] === 'player--active') {
        // Functionality when dice returns 1
        if (dice === 1) {
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
            current1.innerHTML = 0;
            original_score_2 -= score_2;
            score_2 = 0;
            dice = 0;
        }
        // Functionality when dice return any number beside 1;
        else {
            score_2 += dice;
            original_score_2 += dice;
            current1.innerHTML = score_2;
        }
    }

});

// Functionality of hold
btnHold.addEventListener('click', function () {
    if (player0.classList[2] === 'player--active') {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        current0.innerHTML = 0;
        score0.innerHTML = original_score_1;
        score_1 = 0;
    }
    else {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        current1.innerHTML = 0;
        score1.innerHTML = original_score_2;
        score_2 = 0;
    }
});

