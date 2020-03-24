function gameTimer(){
    const timerNumber = document.getElementById("timer-num")
    while (seconds > 0) {
        
        seconds -= 1;
        timerNumber.innerText = seconds;
       
        // code block to be executed
      }
      return "Time's Up!"
    }

    //only want to end timer if time runs out or person pauses with stop button.

    //login page first thing, so we could have a event listener on login button change the display to block. 

    