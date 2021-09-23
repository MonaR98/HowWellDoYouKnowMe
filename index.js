var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score=0;
var highScore=[
  {
    name:"Rachit",
    score:6
  },
  {
    name:"Mamma",
    score:5
  }
]
var userName = readlineSync.question("What is your name? ");
console.log("\n Hey "+chalk.cyanBright(userName)+"!!"+" Let's see, How well do you know me "+ chalk.yellowBright(";)"));

function play(question, answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("Right you are!!!"));
    score++;
  }
  else{
    console.log(chalk.red("Oops, That's not correct!"));
    score--;
  }

  console.log("Your current score is: ",score);
  console.log(chalk.cyanBright("-------------"));

  for(var i=0;i<highScore.length;i++){
    if(score>highScore[i].score){
      console.log(chalk.magentaBright("\n ***  Yay!!!This is a new high score  ***"));
      highScore[i].name=userName;
      highScore[i].score=score;
    }

  }

}

var questions = [
  {
    question:`My Date of Birth?
    a)8th June
    b)6th June
    c)7th June
    `,
    answer:"a"
  },
  {
    question:`My favorite song?
    a)Raatan Lambiyan
    b)Raanjhan
    c)Mann Bhareya
    `,
    answer:"b"
  },
  {
    question:`What always makes me smile?
    a)Flowers
    b)My baby plants
    c)Choclates
    `,
    answer:"b"
  },
  {
    question:`What could I eat everyday?
    a)Mango smoothie
    b)Burger
    c)Dosa
    `,
    answer:"a"
  },
  {
    question:`Am I an Artsy type of person?
    a)A little :D
    b)Forget it :p
    `,
    answer:"a"
  },
  {
    question:`Am I fun at parties?
    a)Yup
    b)Not at all
    c)Want to but can't
    `,
    answer:"c"
  }
  
]
for( var i=0;i<questions.length;i++){
  console.log("\n")
  play(questions[i].question, questions[i].answer)
}

console.log("\n----- Checkout some high scores -----")
for(var i=0;i<highScore.length;i++){
  console.log("Name: "+highScore[i].name);
  console.log("Score: "+highScore[i].score);
}

