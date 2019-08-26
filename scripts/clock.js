const clockContainer = docment.querySelector(.js-clock);
const clockTitle = clockContainer.querySelector("");

function getTime() {
    const date = new Date ();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getSseconds();

    clockTitle.innerText = `${hours} : ${minutes} : ${seconds}`; 
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();