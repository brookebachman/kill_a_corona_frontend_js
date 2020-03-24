function gameTimer(){

    while (seconds < 100000) {
        const timerNumber = document.getElementById("timer-num")
        seconds += 1;
        timerNumber.innerText = seconds;
       
        // code block to be executed
      }
      return "you lost!"
    }
    
    // let set = setInterval(gameTimer, 1000);
    
    // function incrementSeconds() {
    //     seconds += 1;
    //     el.innerText = seconds;
    // };
    // let set = setInterval(incrementSeconds, 1000);