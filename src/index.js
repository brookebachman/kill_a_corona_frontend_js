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

let pauseButton = document.createElement("button")
pauseButton.className = "btn"
pauseButton.id="btn-pause"
pauseButton.innerText = "Pause Game"

let endButton = document.createElement("button")
endButton.className = "btn"
endButton.id="btn-end"
endButton.innerText = "End Game"

let newButton = document.createElement("button")
newButton.className = "btn"
newButton.id="btn-new"
newButton.innerText = "New Game"

// Visibility
document.addEventListener("DOMContentLoaded", () => {
    makeHidden(gameContainer);
})

function makeVisible(element) {
    // element.style.visibility = "visible"
    element.style.display = "block"
}

function makeHidden(element) {
    // element.style.visibility = "hidden"
    element.style.display = "none"
}