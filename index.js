var readlinesync = require('readline-sync');
const chalk = require('chalk');
var username = readlinesync.question(chalk.yellow('hey! what is your name?'));
function welcome(){
  
  console.log(chalk.green( `Welcome ${username.toUpperCase()} `));
  }
 var array = [
   {
   question:' How many runs has Dhoni scored in all the IPL 20th overs he has played',
   answer: '564',
 },
 { question: "dhoni's birthday month",
  answer:  'july',
},
{
  question: "Dhoni's hometown ",
  answer: 'ranchi',
}]
var highscores= [
  {
    name: 'Harshit',
    score: 3,
  }
]
 welcome();
 var score = 0 ;
  function game(question,answer){
   
    var useranswer=readlinesync.question(chalk.red(question))
    ;
    if (useranswer.toUpperCase()===answer.toUpperCase()){
       score++;
    }
    console.log(chalk.blue('\ncurrent score : ') + chalk.green(score));
    console.log(chalk.green('----------------------\n'))
  }
  for(i=0;i<array.length;i++){
    game(array[i].question,array[i].answer);
  }  console.log(chalk.bold.red('\nHIGHSCORE'));
   for(i=0;i<highscores.length;i++){
    
    console.log(chalk.blue(highscores[i].name),highscores[i].score);
  }
  if(score==3){
    console.log(chalk.green( `Hey ${username.toUpperCase()} you have beaten the high score send me the  screenshot to show your highscore`));
  }
  
