const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const GAMES_URL = `${BASE_URL}/games`
const SCORES_URL = `${BASE_URL}/scores`

const loginForm = document.getElementById("login")
const loginDiv = document.getElementById("login-form")
const currentUserDiv = document.getElementById("current-user")

const startButton = document.getElementById("btn-start");
const startDiv = document.getElementById("start-div");
const gameContainer = document.getElementById("game-container");

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