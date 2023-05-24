const countdown = document.querySelector(".countdown");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December"
]
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

let fYear = prompt("Enter future year");
let fMonth = prompt("Enter future month");
let fDate = prompt("Enter future date");
let fHour = prompt("Enter future hour");
let fMin = prompt("Enter future minute");

// const futureDate = new Date(fYear, fMonth-1, fDate, fHour, fMin, 0);

let futureDate = new Date(fYear, fMonth-1, fDate, fHour, fMin, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();
const date = futureDate.getDate();

let day = futureDate.getDay();
day = weekDays[day-1];

let month = futureDate.getMonth();
month = months[month];

countdown.textContent = `Counting down from: ${day}, ${date} ${month} ${year}, ${hour}:${min}am`;

let futureTime = futureDate.getTime();
// console.log(futureTime);


function getRemainingTime(){
  let currentTime = new Date().getTime();
  let diff = futureTime - currentTime;
  
  //* Values in MS
  let oneDay = 24*60*60*1000;
  let oneHour = 60*60*1000;
  let oneMin = 60*1000;

  //* Calculating Values
  let daysLeft = diff/oneDay;
  daysLeft = Math.floor(daysLeft);
  
  let hoursLeft = (diff%oneDay) / oneHour;
  hoursLeft = Math.floor(hoursLeft);
  
  let minsLeft =  (diff%oneHour) / oneMin;
  minsLeft = Math.floor(minsLeft);

  let secsLeft = (diff%oneMin) / 1000;
  secsLeft = Math.floor(secsLeft);

  const left = [daysLeft, hoursLeft, minsLeft, secsLeft];

  items.forEach(function(item, index){
    item.innerHTML = left[index];
  });

  if(diff < 0){
    clearInterval(count);
    deadline.innerHTML = `<h4 class="expired">You are Dead!</h4>`
  }
}

let count = setInterval(getRemainingTime, 1000);
getRemainingTime();