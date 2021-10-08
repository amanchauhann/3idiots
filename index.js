readlinesync = require("readline-sync")
var userAnswer = readlinesync.question("What is your name? ");
score = 0
console.log("Hello " + userAnswer, ", Welcome to this Quiz.")
console.log("For YES enter 'Yes', for NO enter 'No'. ")
function q(question, answer){
  var userAnswer = readlinesync.question(question)
  if (userAnswer === answer) {
  console.log("Your answer is right. ")
  score = (score + 1)
} else {
  console.log("Your answer is wrong. ")
  score = (score - 1)
}
console.log("Current score: " + score)
console.log("--------------------------")
}


q("Was RanchodDas Chanchad a intelligent person? ", "Yes")
q("You have 2 minutes to find two words from this: AFNFIDOERAJUNFIEIONCOFARHANIVIFNFODNSNV. Enter your answer in capital. Enter both word with just space between them. ", "RAJU FARHAN")
q("Was Suhan Asshole? ", "Yes")
q("Do you also prefer churan which silencer used to take? Don't lie. ", "Yes")
q("How does a induction motor starts? ", "Burr")
q("Do you think Raju deserved the job? ", "No")
q("Was Viru Sahastrabuddhi a eccentric person? ", "Yes")

 if (score > 3) {
   console.log("Congrats. You will go to LEVEL 2. ")
 } else {
   console.log("YOU CAN'T GO TO LEVEL 2. ")
 }



if (score > 3){
  function play(question, answer) {
    var userAnswer1 = readlinesync.question(question)
     if (userAnswer1 === answer){
     console.log("Right Answer. ")
     score = (score + 1)
  } else {
    console.log("Wrong Answer. ")
    score = (score - 1)
  }
  console.log("Current score: " + score)
  console.log("--------------------------")
 }
  console.log("---------------------- LEVEL 2 ----------------------");


play("Was Librarian Dubey Ji permanent? ", "Yes")
play("Who is more successful ChaturRamalingam or Rancho? ", "Rancho")
play("Millimeter should be permoted as Centimeter? ", "Yes")
play("What is a MACHINE? ", "")
play("Peechla answer galt tha iss baar aasan bhasha mein btaye? आसन भाषा में बताएं|  ", "Up down Up down")
}

console.log("CONGRTULATIONS! ", userAnswer, " You have successfully completed the Quiz. Your Final Score is: ", + score, ". Please check out the high scores and if you think you should be there, take a screenshot and send it to me so I can update the score.")
let hs = {Naman: 4, Mathew: 2, Om: 1, Mahi: 3, Donald: 6}
console.table(hs);



var allScore= [4, 2, 1, 3, 6]

var highscore = Math.max(...allScore)
console.log("The high Score is: ", + highscore)

console.log("THANK YOU ",  userAnswer, " for taking out time. " )