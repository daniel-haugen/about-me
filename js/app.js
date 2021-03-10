'use strict';
let q1 = 'Does Daniel still watch VHS tapes?';
let q2 = 'Is Daniel taller than 6 feet?';
let q3 = 'Does Daniel have a dog?';
let q4 = 'Would Daniel spend an entire day staring at a tv screen?';
let q5 = 'Did Daniel brush his teeth today?';
let q6 = 'Final question... What\'s your name?';

let guess1 = prompt(q1 + ' Yes or no?').toLowerCase();

if (guess1 === 'yes' || guess1 === 'y' || guess1 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
} else {
//   console.log('nice try...');
  alert('nice try...');
}

let guess2 = prompt(q2 + ' Yes or no?').toLowerCase();

if (guess2 === 'no' || guess2 === 'n') {
//   console.log('you guessed right!');
  alert('you guessed right!');
} else {
//   console.log('nope, nice try...');
  alert('nope, nice try...');
}

let guess3 = prompt(q3 + ' Yes or no?').toLowerCase();

if (guess3 === 'yes' || guess3 === 'y' || guess3 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
} else {
//   console.log('nice try...');
  alert('nice try...');
}

let guess4 = prompt(q4 + ' Yes or no?').toLowerCase();

if (guess4 === 'yes' || guess4 === 'y' || guess4 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
} else {
//   console.log('nice try...');
  alert('nice try...');
}

let guess5 = prompt(q5 + ' Yes or no?').toLowerCase();

if (guess5 === 'yes' || guess5 === 'y' || guess5 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
} else {
//   console.log('nice try...');
  alert('nice try...');
}

let username = prompt(q6);

alert('Welcome to my website ' + username + '.');
document.getElementById('welcome').textContent = 'Hello ' + username + '! Welcome to my website.';
