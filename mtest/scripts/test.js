'use strict';

// function sendMessage() {
//   let response = await fetch(telegramUrl);
//   console.log(response.status);
//   // let result = await response.json();
//   // console.log(result);
// }

// const formButton = document.querySelector('.form__button');
// const telegramUrl = 'https://api.telegram.org/bot1137134607:AAEeEw5GMRAhlWlruwLcslSSiiPbXeHcrao/sendMessage?chat_id=-499716502&text=Hello%20World';

// formButton.addEventListener('click', () => {
//   let response = await fetch(telegramUrl);
//   console.log(response.status);
// });

const formInput = document.querySelector('.form__input');
const formButton = document.querySelector('.form__button');

formButton.addEventListener('click', () => {
  let message = formInput.value;
  let telegramUrl = 'https://api.telegram.org/bot1782609018:AAGwaamampinsCmzhEJaS4R3vNWklnBYgs0/sendMessage?chat_id=-581525639&text=' + message;
  let response = fetch(telegramUrl);
  console.log(response);
});

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await response.json(); // читаем ответ в формате JSON

// alert(commits[0].author.login);

// 1782609018:AAGwaamampinsCmzhEJaS4R3vNWklnBYgs0

// Group ID
// -581525639