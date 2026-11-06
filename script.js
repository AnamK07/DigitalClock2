function runClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12; 
    // Convert to 12-hour format
    
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = meridiem;
}

// Update the clock every second
setInterval(runClock, 1000);
runClock(); 