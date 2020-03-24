function gameTimer(){
    const timerNumber = document.getElementById("timer-num")
    while (seconds < 100000) {
        
        seconds += 1;
        timerNumber.innerText = seconds;
       
        // code block to be executed
      }
      return "you lost!"
    }