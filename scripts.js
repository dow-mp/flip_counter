const oneSecond = document.getElementById("one-seconds");
const tenSeconds = document.getElementById("ten-seconds");
console.log(oneSecond);

function addClass() {
    oneSecond.classList.toggle("one-seconds");
    setTimeout(() => {
        oneSecond.classList.toggle("one-seconds");
    }, 500);
}

function increment() {
    let seconds = new Date().getSeconds();
    let secStr = seconds.toString();
    if (secStr.length == 2) {
        document.getElementById("ten-seconds-top").innerText = secStr[0];
        document.getElementById("ten-seconds-bottom").innerText = secStr[0];
        document.getElementById("one-seconds-top").innerText = secStr[1];
        document.getElementById("one-seconds-bottom").innerText = secStr[1];
    } else {
        document.getElementById("one-seconds-top").innerText = secStr[0];
        document.getElementById("one-seconds-bottom").innerText = secStr[0];
    }
    addClass();
}

setInterval(increment, 1000);

