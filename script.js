/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let Totalscore=0
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const GameOption=['Rock','Paper','Scissors']
  const index=Math.floor(Math.random()*GameOption.length)
  return GameOption[index]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score=0
  

  // All situations where human draws, set `score` to 0
  if(playerChoice==computerChoice)  return score
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  if(playerChoice=='Rock' && computerChoice=='Scissors') score=1
  else if(playerChoice=='Paper' && computerChoice=='Rock') score=1
  else if(playerChoice=='Scissors' && computerChoice=='Paper') score=1
  // Otherwise human loses (aka set score to -1)
  else{
    score=-1
  }
  // return score
   return score 
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const ResultDiv=document.getElementById('result')
  const player_scoreDiv=document.getElementById('player-score')
  const handsDiv=document.getElementById('hands')
  if(score==-1){
    Totalscore+=score
    player_scoreDiv.innerText=`Your Score: ${Totalscore}`
    handsDiv.innerText=`🙎‍♂️ ${playerChoice} vs 🤖${computerChoice}`
    ResultDiv.innerText=('You Lost!')
  }
  else if(score==1){
    Totalscore+=score
    player_scoreDiv.innerText=`Your Score: ${Totalscore}`
    handsDiv.innerText=`🙎‍♂️ ${playerChoice} vs 🤖${computerChoice}`
    ResultDiv.innerText=('You Won!')
  }
  else{
    player_scoreDiv.innerText=`Your Score: ${Totalscore}`
    handsDiv.innerText=`🙎‍♂️ ${playerChoice} vs 🤖${computerChoice}`
    ResultDiv.innerText=('Its Draw!')
  }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  //alert('running')
  const cc=getComputerChoice()
  const HumanChoice=playerChoice.value  
  const score=getResult(HumanChoice,cc)
  showResult(score,HumanChoice,cc)
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  let rpnbuttons=document.querySelectorAll('.rpsButton')
    // 2. Add a 'click' event listener to each button
    rpnbuttons.forEach(rpnbutton=>{
            rpnbutton.onclick=()=>onClickRPS(rpnbutton)
    })
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    // Add a click listener to the end game button that runs the endGame() function on click
  let Endgame=document.getElementById('endGameButton')
  Endgame.onclick=()=> endGame()

  let Reset=document.getElementById('ResetButton')
  Reset.onclick=()=> Resets()
}

function Resets() 
{
  if(Totalscore!=0){

    const ResultDiv=document.getElementById('result')
    const player_scoreDiv=document.getElementById('player-score')
    const handsDiv=document.getElementById('hands')
    Totalscore=0
    ResultDiv.innerText=''
    player_scoreDiv.innerText=''
    handsDiv.innerText='Score Resets'
  }
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const ResultDiv=document.getElementById('result')
  const player_scoreDiv=document.getElementById('player-score')
  const handsDiv=document.getElementById('hands')
  Totalscore=0
  ResultDiv.innerText=''
  player_scoreDiv.innerText=''
  handsDiv.innerText='Thanks for Playing'
  window.close()
}

playGame()