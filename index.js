var readlineSync = require("readline-sync");

var score = 0;

//  high score data
var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What is the name of our Galaxy? ",
  answer: "Milky Way"
}, {
  question: "How many planets are there in our solar system? ",
  answer: "8"
},
{
  question: "Which planet has the largest no. of moons? ",
  answer: "Jupiter"
}, {
  question: "Which is the largest planet in our solar system? ",
  answer: "Jupiter"
}, {
  question: "Which planet has the largest ring in our solar system? ",
  answer: "Saturn"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to the SPACE quiz");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


