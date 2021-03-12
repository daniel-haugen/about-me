'use strict';

// Define questions
let q = ['Does Daniel still watch VHS tapes?',
  'Is Daniel taller than 6 feet?',
  'Does Daniel have a dog?',
  'Would Daniel spend an entire day staring at a tv screen?',
  'Did Daniel brush his teeth today?',
  'Final question... What\'s your name?'];

// Variable to track how many answers they get right
let rightAnswers= 0;

function vhs() {
  let guess1 = prompt(q[0] + ' Yes or no?').toLowerCase();
  if (guess1 === 'yes' || guess1 === 'y' || guess1 === 'ye') {
  //   console.log('you guessed right!');
    alert('you guessed right!');
    rightAnswers++;
  } else {
  //   console.log('nice try...');
    alert('nice try...');
  }
}
vhs();

function height() {
  let guess2 = prompt(q[1] + ' Yes or no?').toLowerCase();

  if (guess2 === 'no' || guess2 === 'n') {
  //   console.log('you guessed right!');
    alert('you guessed right!');
    rightAnswers++;
  } else {
  //   console.log('nope, nice try...');
    alert('nope, nice try...');
  }
}
height();

function dog() {
  let guess3 = prompt(q[2] + ' Yes or no?').toLowerCase();

  if (guess3 === 'yes' || guess3 === 'y' || guess3 === 'ye') {
  //   console.log('you guessed right!');
    alert('you guessed right!');
    rightAnswers++;
  } else {
  //   console.log('nice try...');
    alert('nice try...');
  }
}
dog();

function tv() {
  let guess4 = prompt(q[3] + ' Yes or no?').toLowerCase();

  if (guess4 === 'yes' || guess4 === 'y' || guess4 === 'ye') {
  //   console.log('you guessed right!');
    alert('you guessed right!');
    rightAnswers++;
  } else {
  //   console.log('nice try...');
    alert('nice try...');
  }
}
tv();

function teeth() {
  let guess5 = prompt(q[4] + ' Yes or no?').toLowerCase();

  if (guess5 === 'yes' || guess5 === 'y' || guess5 === 'ye') {
  //   console.log('you guessed right!');
    alert('you guessed right!');
    rightAnswers++;
  } else {
  //   console.log('nice try...');
    alert('nice try...');
  }
}
teeth();


//NUMBER GAME #1!!!!
function gameOne() {
  let numAnswer = 6;
  let attempts = 4;

  //Loop through 4 times
  for (let i = 0; i < 4; i++) {

    //Ask for their number guess and turn into integer
    let numGuess = parseInt(prompt(`Can you guess my number? It's between 1 and 10. Don't spell it out! You've got ${attempts} chances...`));

    // Respond whether the guess is too high or too low
    if (numGuess < numAnswer) {
      console.log('You\'re guess is too low');
      alert('You\'re guess is too low');
      attempts--;
    } else if (numGuess > numAnswer) {
      console.log('You\'re guess is too high ');
      alert('You\'re guess is too high ');
      attempts--;
    } else if (numGuess === numAnswer) {
      console.log('You\'ve got it!');
      alert('You got the right answer!');
      rightAnswers++;
      break;
    } else {
      alert('are you trying to break it?');
      attempts--;
    }
    if (i === 3) {
      console.log('you failed horribly');
      alert(`Nice try. The correct answer was ${numAnswer}`);
    }
  }
}
gameOne();


//NUMBER GAME #2!!!!
function gameTwo() {
  let numAnswer2 = [5,9,4];
  let correct = false;
  let attempts = 6;

  //Loop through 6 times for 6 guess attempts
  for (let i = 0; i < 6; i++) {

    //take the guess and convert into integer
    let numGuess2 = parseInt(prompt(`Can you guess my NEW number between 1-10? You've got ${attempts} chances...`));

    // loop through the array and evaluate if the guess is equal to a number in the array
    for (let j = 0; j < numAnswer2.length; j++) {
      //if a member of the array matches the guess, update correct variable and increment rightAnswers
      if (numAnswer2[j] === numGuess2) {
        console.log('you got it!');
        correct = true;
        rightAnswers++;
        break;
      }
    }
    //if it leaves the second for loop and correct hasn't been switched to true, it repeats the first for loop.
    if (correct === true) {
      alert(`You got a total of ${rightAnswers} questions right`);
      break;
    } else {
      alert('incorrect answer');
      attempts--;
    }
  }
  //once it leaves the entire for loop, 'correct' is used to identify whether or not they were succesful in guessing the number.
  if (correct !== true) {
    console.log('sorry you got it wrong');
    alert(`the correct answers were: ${numAnswer2}. You got a total of ${rightAnswers} questions right out of seven total`);
  }
}
gameTwo();

//prompt for user's name
function userName() {
  let username = prompt(q[5]);

  //if username is empty, fill it with 'Stranger'
  if (!username) {
    username = 'Stranger';
  }

  // Add a welcome message on page for user
  alert(`Welcome to my website ${username}`);
  document.getElementById('welcome').textContent = `Hello ${username}! Welcome to my website.`;
}
userName();

