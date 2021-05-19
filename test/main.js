'use strict';

const button = document.querySelector('.day__button');
const dayGroup = document.querySelector('.day__group');
const dayCurrent = document.querySelector('.day__current');
const dayInGroup = document.querySelectorAll('.day__text');
const weekDays = [
  'Sunday', 'Monday: 8AM - 7PM',
  'Tuesday: 8AM - 7PM', 'Wednesday: 8AM - 7PM',
  'Thursday: 8AM - 7PM', 'Friday: 8AM - 7PM',
  'Saturday: 8AM - 5PM'
];

function showDayGroup() {
  dayGroup.classList.toggle('day__group--visible');
}

button.addEventListener('click', showDayGroup);

console.log(dayCurrent.textContent);

let currentData = new Date().getDay();

dayInGroup[currentData + 1].style.background = '#DDD';
dayCurrent.textContent = weekDays[currentData];
dayCurrent.style.visibility = 'visible';