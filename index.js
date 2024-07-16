// digital clock programme

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const merdiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const clockValues = `${hours}:${minutes}:${seconds} ${merdiem}` ;
    Clock = document.getElementById("Clock");
    Clock.textContent = clockValues;

}

updateClock();
setInterval(updateClock,1000);