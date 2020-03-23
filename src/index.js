const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const GAMES_URL = `${BASE_URL}/games`
const SCORES_URL = `${BASE_URL}/scores`

fetch(USERS_URL)
    .then(resp => resp.json())
    .then(users => {
        users.forEach(user => {
            const body = document.getElementById("user-list")
            const userHTML = `<h1>${user.name}</h1>`
            body.innerHTML += userHTML
        });
        
    })

fetch(GAMES_URL)
    .then(resp => resp.json())
    .then(games => {
        games.forEach(game => {
            const gameDiv = document.getElementsByClassName("box")[0]
            const image = document.createElement("img")
            image.src = game.background_image
            gameDiv.appendChild(image)
        });
        
    })

// document.addEventListener("DOMContentLoaded", () => {
    
// })