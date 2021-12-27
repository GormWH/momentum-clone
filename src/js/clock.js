const clock = document.querySelector("#main-container .clock");
const greetings = document.querySelector("#main-container .greetings");

function showClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}`; // ${seconds}
    sayHi(hours);
}

function sayHi(hours) {
    const user = localStorage.getItem("user");
    let dayStatus = "";
    if (22 < hours || hours <6) dayStatus = "night";
    else if (hours < 12) dayStatus = "morning";
    else if (hours < 17) dayStatus = "afternoon";
    else dayStatus = "evening";
    greetings.innerHTML = `Good ${dayStatus}, ${user}`;
}

showClock();
setInterval(showClock, 1000);