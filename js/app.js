"use strict";

// dom elements
const welcome = document.querySelector("#welcome");
const testButton = document.querySelector("button");

function checkAnswer(userAnswer, correctAnswers) {
  userAnswer = userAnswer.toLowerCase();
  if (correctAnswers.includes(userAnswer)) {
    // console.log("correct");
    alert("correct");
    return true;
  } else {
    // console.log("incorrect");
    alert("incorrect");
    return false;
  } 
}

function displayUsername(name) {
  if (name === null || name.length == 0) welcome.innerHTML = "Welcome";
  else welcome.innerHTML = `Welcome, ${userName}!`;
}

function checkGuess(guess, answer) {
  guess = parseInt(guess);
  console.log(guess);
  if (isNaN(guess)) {
    alert("Must enter valid number!");
    return false;
  }
  if (guess == answer) {
    alert("you got it!");
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
displayUsername(userName);

// event listeners
testButton.addEventListener("click", (evnt) => {
  alert(
    `Thanks ${
      userName ? userName : "user"
    }, please answer a 'y' or 'n' to all of the following questions`
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
  for (let i = 0; i < 4; i++) {
    let guess = prompt("Guess a number");
    if (checkGuess(guess, 42)) {
      correctAnswers++;
      break;
    } else {
      counter--;
    }
  }
  if (counter == 0) {
    alert("sorry the number was 42");
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
    if (place === null) {
      place = "";
    }

    let strippedPlace = place.toLowerCase().replace(/ /g, '');
    if (answerArr.includes(strippedPlace)) {
      correctAnswers++;
      alert(`${place} is correct! I enjoy all of these places in memphis:\n\n${placeArr.join(", ")}`);
      break;
    } else {
      counter--;
      alert(`Sorry ${place} is incorrect`);
    }
  }

  if(counter == 0) {
    alert(`sorry the possible correct answers are:\n\n ${placeArr.join(', ')}`)
  }

  // final game alert
  alert(
    `Thanks for taking my test ${
      userName ? userName : "user"
    }, you made a ${correctAnswers}/7`
  );
});
