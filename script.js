

function today() {
    const currentDate = new Date()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getDay()]
    const currentUTCHours = currentDate.getUTCHours()
    const currentUTCMInutes = currentDate.getUTCMinutes()
    const currentUTCSeconds = currentDate.getUTCSeconds()
    const currentUTCMilliseconds = currentDate.getUTCMilliseconds()
    

   document.querySelector('.currentDayOfTheWeek').innerHTML = currentDay
   document.querySelector('.currentUTCHours').innerHTML = currentUTCHours + 1
   document.querySelector('.currentUTCMinutes').innerHTML = currentUTCMInutes
   document.querySelector('.currentUTCSeconds').innerHTML = currentUTCSeconds
   document.querySelector('.currentUTCMilliseconds').innerHTML = currentUTCMilliseconds
}

today()
setInterval(today, 1000);
