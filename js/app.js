"use strict";

// dom elements
const welcome = document.querySelector("#welcome");
const testButton = document.querySelector("button");

function checkAnswer(userAnswer, correctAnswers) {
  userAnswer = userAnswer.toLowerCase();
  if (correctAnswers.includes(userAnswer)) {
    alert("Correct!");
    return true;
  } else {
    alert("Sorry, wrong answer!");
    return false;
  } 
}

function displayWelcomeName(name) {
  if (name === null || name.length == 0) welcome.innerHTML = "Welcome";
  else welcome.innerHTML = `Welcome, ${userName}!`;
}

function checkGuess(guess, answer) {
  guess = parseInt(guess);
  if ( isNaN(guess) )  {
    alert("Must enter valid number!");
    return false;
  }
  if (guess == answer) {
    alert("You got it!");
    return true;
  } else if (guess < answer) {
    alert("Too low!");
    return false;
  } else {
    alert("Too high!");
    return false;
  }
}

let userName = prompt("Hello, what is your name?");
displayWelcomeName(userName);

// event listener for quiz pop take quiz button
testButton.addEventListener("click", (evnt) => {
  alert(
    `Thanks ${
      userName ? userName : "user"
    }, Please answer a 'yes'(y) or 'no'(n) to the next 5 five questions`
  );
  let correctAnswers = 0;

  // yes and no questions
  let name = prompt("Is my name Jim Cannon?");
  if (checkAnswer(name, ["n", "no"])) correctAnswers++;

  let work = prompt("Have I worked for Andy Frain Services?");
  if (checkAnswer(work, ["y", "yes"])) correctAnswers++;

  let education = prompt(
    "Did I get my education from University of Tennessee at Martin?"
  );
  if (checkAnswer(education, ["y", "yes"])) correctAnswers++;

  let goal = prompt(
    "Do I want to mentor and inspire the next generation of developers?"
  );
  if (checkAnswer(goal, ["y", "yes"])) correctAnswers++;

  let bootcamp = prompt("Am I current enrolled in CodeCrew bootcamp?");
  if (checkAnswer(bootcamp, ["y", "yes"])) correctAnswers++;

  // number guessing game
  let counter = 4;
  let correctNumber = 42;
  for (let i = 0; i < 4; i++) {
    let guess = prompt("Guess a number");
    if ( checkGuess(guess, correctNumber) ) {
      correctAnswers++;
      break;
    } else {
      counter--;
    }
  }
  if (counter == 0) {
    alert(`sorry the number was ${correctNumber}`);
  }

  // favorites places question
  let placeArr = [
    "Memphis Rock & Roll Soul Museum",
    "Sun Studio",
    "Beale Street",
    "Fedex Forum",
    "Shelby Farms",
    "Peabody Hotel",
    "Lorraine Motel",
    "Graceland",
    "Stax Museum",
    "Memphis Zoo"
  ];

  let answerArr = placeArr.map(answer => {
    return answer
      .toLowerCase()
      .replace(/ /g, '');
  });

  counter = 6;
  for (let i = 0; i < 6; i++) {
    let place = prompt("Name one of my 10 favorite places in memphis");
    let correct = false;

    // prompt returns null if user hit cancel
    if (place === null) place = "";

    let strippedPlace = place.toLowerCase().replace(/ /g, '');
    for(let j = 0; j < answerArr.length; j++) {
      if (answerArr[j] == strippedPlace) {
        correctAnswers++;
        correct = true;
        let responseString = 'Correct! The other possible correct answers are:\n\n';
        for(let i = 0; i < placeArr.length; i++) {
        responseString += `${placeArr[i]}, `;
        }
        alert(responseString);
        break;
      } 
    }
    if (correct) {
      break;
    } else {
      counter--;
      alert(`Sorry ${place} is incorrect`);
    }
  }

  if(counter == 0) {
    let responseString = 'sorry the possible correct answers are:\n\n';
    for(let i = 0; i < placeArr.length; i++) {
      responseString += `${placeArr[i]}, `;
    }
    alert(responseString);
  }

  // final game alert
  alert(
    `Thanks for taking my test ${
      userName ? userName : "user"
    }, you made a ${correctAnswers}/7`
  );
});
