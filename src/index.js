// Backend
const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const GAMES_URL = `${BASE_URL}/games`
const SCORES_URL = `${BASE_URL}/scores`

// Start Elements
const gameContainer = document.getElementById("game-container");

// Buttons
const startButton = document.getElementById("btn-start");
const pauseButton = document.getElementById("btn-pause");
const endButton = document.getElementById("btn-end");
const newButton = document.getElementById("btn-new");

// Visibility
gameContainer.style.visibility = "hidden";
startButton.style.visibility = "hidden";
pauseButton.style.visibility = "hidden";
endButton.style.visibility = "hidden";
newButton.style.visibility = "hidden";

// fetch(USERS_URL)
//     .then(resp => resp.json())
//     .then(users => {
//         users.forEach(user => {
//             const body = document.getElementById("user-list")
//             const userHTML = `<h1>${user.name}</h1>`
//             body.innerHTML += userHTML
//         });
        
//     })

// function fetchGame() {
//     fetch(GAMES_URL)
//     .then(resp => resp.json())
//     .then(games => {
//         games.forEach(game => {
//             console.log(game.main_image)
//         });
        
//     })
   
// }