const timeDisplay = document.querySelector('.time-data');
const dayDisplay = document.querySelector('.day-data');
const welcomeText = document.getElementById('welcome-text');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateLiveStats() {
    const now = new Date();

    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    const ms = String(now.getUTCMilliseconds()).padStart(3, '0');
    
    if (timeDisplay) {
        
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}:${ms}`;
    }
    if (dayDisplay) dayDisplay.textContent = days[now.getUTCDay()];
}


function init() {
    updateLiveStats();

    setInterval(updateLiveStats, 100); 

    setInterval(rotateGreetings, 4000);
}

document.addEventListener('DOMContentLoaded', init);