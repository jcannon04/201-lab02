"use strict";

let welcome = document.querySelector("#welcome");
const testButton = document.querySelector("button");

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer.toLowerCase() == correctAnswer) {
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

let userName = prompt("Hello, what is your name?");
displayUsername(userName);

testButton.addEventListener("click", (evnt) => {
  alert(
    `Thanks ${
      userName ? userName : "user"
    }, please answer a 'y' or 'n' to all of the following questions`
  );
  let correctAnswers = 0;

  let name = prompt("Is my name Jim Cannon?");
  if (checkAnswer(name, "n")) correctAnswers++;

  let work = prompt("Have I worked for Andy Frain Services?");
  if (checkAnswer(work, "y")) correctAnswers++;

  let education = prompt(
    "Did I get my education from University of Tennessee at Martin?"
  );
  if (checkAnswer(education, "y")) correctAnswers++;

  let goal = prompt(
    "Do I want to mentor and inspire the next generation of developers?"
  );
  if (checkAnswer(goal, "y")) correctAnswers++;

  let bootcamp = prompt("Am I current enrolled in CodeCrew bootcamp?");
  if (checkAnswer(bootcamp, "y")) correctAnswers++;

  alert(
    `Thanks for taking my test ${
      userName ? userName : "user"
    }, you made a ${correctAnswers}/5`
  );
});
