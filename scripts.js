function incrementCounters() {
    let newDate = new Date();
    let seconds = newDate.getSeconds()
    let secStr = seconds.toString();
    if (seconds.length === 2) {
        document.getElementById("left").innerText = secStr[0]
        document.getElementById("right").innerText = secStr[1]
    } else {
        document.getElementById("left").innerText = ("")
        document.getElementById("right").innerText = secStr[0]
     }
   }
  
setInterval(incrementCounters(), 100);