let computerNum = 0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 3
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history = []
let answerArea = document.getElementById("answer-area")
let gameOverMsg = document.getElementById("gameover-msg")

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value=""})

function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100) + 1
  answerArea.textContent = `정답 ${computerNum}`
}
function play(){
  let userValue = userInput.value

  if(userValue<1 || userValue>100){
    resultArea.textContent="1과 100사이 숫자를 입력해주세요"
    return
  }
  if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력하세요"
    return
  }
  chances--
  chanceArea.textContent=`남은기회:${chances}`
  if(userValue < computerNum){
    resultArea.textContent = "UP"
  }else if(userValue>computerNum){
    resultArea.textContent = "DOWN"
  }else {
    resultArea.textContent = "맞췄습니다"
    gameOver=true
  }

  history.push(userValue)

  if(chances < 1){
    gameOver = true
  }
  if(gameOver == true){
    playButton.disabled = true;
    gameOverMsg.textContent="게임 오버"
  }
}
function reset(){
  userInput.value=""
  chances = 3
  gameOverMsg.textContent=""
  playButton.disabled = false;
  pickRandomNum()
  resultArea.textContent="결과값이 여기나옵니다"
  chanceArea.textContent=`남은기회:${chances}`
}

pickRandomNum()