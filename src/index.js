const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const GAMES_URL = `${BASE_URL}/games`
const SCORES_URL = `${BASE_URL}/scores`
second = 0;

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("btn-start")
    startButton.addEventListener("click", () => {
        fetchGame()
    })
    gameTimer();
})

fetch(USERS_URL)
    .then(resp => resp.json())
    .then(users => {
        users.forEach(user => {
            const body = document.getElementById("user-list")
            const userHTML = `<h1>${user.name}</h1>`
            body.innerHTML += userHTML
        });
        
    })

function fetchGame() {
    fetch(GAMES_URL)
    .then(resp => resp.json())
    .then(games => {
        games.forEach(game => {
            console.log(game.main_image)
        });
        
    })
    startTimer()
}