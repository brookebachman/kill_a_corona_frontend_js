// Backend
const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const GAMES_URL = `${BASE_URL}/games`
const SCORES_URL = `${BASE_URL}/scores`

// Start Elements
const gameContainer = document.getElementById("game-container");

// Buttons
let startButton = document.createElement("button")
startButton.className = "btn"
startButton.id="btn-start"
startButton.innerText = "Start Game"

const pauseButton = document.getElementById("btn-pause");
const endButton = document.getElementById("btn-end");
const newButton = document.getElementById("btn-new");

// Visibility
document.addEventListener("DOMContentLoaded", () => {
    makeHidden(gameContainer);
    makeHidden(pauseButton);
    makeHidden(endButton);
    makeHidden(newButton);
})

function makeVisible(element) {
    element.style.visibility = "visible"
}

function makeHidden(element) {
    element.style.visibility = "hidden"
}