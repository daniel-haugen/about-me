'use strict';

// Define questions
let q = ['Does Daniel still watch VHS tapes?',
  'Is Daniel taller than 6 feet?',
  'Does Daniel have a dog?',
  'Would Daniel spend an entire day staring at a tv screen?',
  'Did Daniel brush his teeth today?',
  'Final question... What\'s your name?'];

let rightAnswers= 0;

let guess1 = prompt(q[0] + ' Yes or no?').toLowerCase();

if (guess1 === 'yes' || guess1 === 'y' || guess1 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
  rightAnswers++;
} else {
//   console.log('nice try...');
  alert('nice try...');
}

let guess2 = prompt(q[1] + ' Yes or no?').toLowerCase();

if (guess2 === 'no' || guess2 === 'n') {
//   console.log('you guessed right!');
  alert('you guessed right!');
  rightAnswers++;
} else {
//   console.log('nope, nice try...');
  alert('nope, nice try...');
}

let guess3 = prompt(q[2] + ' Yes or no?').toLowerCase();

if (guess3 === 'yes' || guess3 === 'y' || guess3 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
  rightAnswers++;
} else {
//   console.log('nice try...');
  alert('nice try...');
}

let guess4 = prompt(q[3] + ' Yes or no?').toLowerCase();

if (guess4 === 'yes' || guess4 === 'y' || guess4 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
  rightAnswers++;
} else {
//   console.log('nice try...');
  alert('nice try...');
}

let guess5 = prompt(q[4] + ' Yes or no?').toLowerCase();

if (guess5 === 'yes' || guess5 === 'y' || guess5 === 'ye') {
//   console.log('you guessed right!');
  alert('you guessed right!');
  rightAnswers++;
} else {
//   console.log('nice try...');
  alert('nice try...');
}


//NUMBER GAME #1!!!!
let numAnswer = 6;


//Loop through 4 times
for (let i = 0; i < 4; i++) {
  let numGuess = prompt('Can you guess my number? Don\'t spell it out! You\'ve got 4 chances...');
  let int = parseInt(numGuess);
  if (int < numAnswer) {
    console.log('You\'re guess is too low');
    alert('You\'re guess is too low');
  } else if (int > numAnswer) {
    console.log('You\'re guess is too high ');
    alert('You\'re guess is too high ');
  } else {
    console.log('You\'ve got it!');
    alert('You got the right answer!');
    rightAnswers++;
    //if they get the right answer, correct is incremented by 1
    break;
  }
  if (i === 3) {
    console.log('you failed horribly');
    alert(`Nice try. The correct answer was ${numAnswer}`);
  }
}

//NUMBER GAME #2!!!!
let numAnswer2 = [5,9,4];
let correct = false;

//Loop through 6 times
for (let i = 0; i < 6; i++) {

  //take the guess
  let numGuess2 = prompt('Can you guess my NEW number between 1-10? Don\'t spell it out! You\'ve got 6 chances...');
  //convert the type of the guess
  let int2 = parseInt(numGuess2);
  // loop through the array and evaluate if the guess is equal to a number in the array
  for (let j = 0; j < numAnswer2.length; j++) {
    if (numAnswer2[j] === int2) {
      console.log('you got it!');
      correct = true;
      rightAnswers++;
      break;
    }
  }
  if (correct === true) {
    alert(`You got a total of ${rightAnswers} questions right`)
    break;
  } else {
    alert('incorrect answer');
  }
}
if (correct !== true) {
  console.log('sorry you got it wrong');
  alert(`the correct answers were: ${numAnswer2}. You got a total of ${rightAnswers} questions right`);
}













// let username = prompt(q[5]);

// if (!username) {
//   username = 'Stranger';
// }

// // Add a welcome message on page for user
// alert(`Welcome to my website ${username}`);
// document.getElementById('welcome').textContent = `Hello ${username}! Welcome to my website.`;
