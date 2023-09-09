const currentDate = new Date()
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentDay = daysOfWeek[currentDate.getDay()]
let currentUTCTime = currentDate.toISOString().substr(11, 8)
console.log(currentUTCTime)
let currentUTCHours = currentDate.getUTCHours()
let currentUTCMInutes = currentDate.getUTCMinutes()
let currentUTCSeconds = currentDate.getUTCSeconds()
let currentUTCMilliseconds = currentDate.getUTCMilliseconds()


document.querySelector('.currentDayOfTheWeek').innerHTML = currentDay
document.querySelector('.currentUTCHours').innerHTML = currentUTCHours + 1
document.querySelector('.currentUTCMinutes').innerHTML = currentUTCMInutes
document.querySelector('.currentUTCSeconds').innerHTML = currentUTCSeconds
document.querySelector('.currentUTCMilliseconds').innerHTML = currentUTCMilliseconds

