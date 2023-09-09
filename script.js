const currentDate = new Date()
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentDay = daysOfWeek[currentDate.getDay()]
let currentUTCTime = currentDate.toISOString().substr(11, 8)


document.querySelector('.currentDayOfTheWeek').innerHTML = currentDay
document.querySelector('.currentUTCTime').innerHTML = currentUTCTime
