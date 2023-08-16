import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball = new Ball(document.getElementById("ball"))
const palyerPaddle = new Paddle(document.getElementById("player-paddel"))
const computerPaddle = new Paddle(document.getElementById("computer-paddel"))
const playerScoreElement = document.getElementById("player-score")
const computerScoreElement = document.getElementById("computer-score")

let lastTime
function update(time){
   if(lastTime != null ){
    const delta = time-lastTime
    ball.update(delta, [palyerPaddle.rect(),computerPaddle.rect()]);
    computerPaddle.update(delta, ball.y)

    if(isLose()) handleLose();

   }
   lastTime = time;
   window.requestAnimationFrame(update);
}

function isLose(){
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}
function handleLose(){
    const rect = ball.rect()
    if(rect.right >= window.innerWidth){
        playerScoreElement.textContent = parseInt(playerScoreElement.textContent)+1
    }else{
        computerScoreElement.textContent = parseInt(computerScoreElement.textContent)+1
    }
    ball.reset()
    computerPaddle.reset();
}

document.addEventListener('mousemove', e =>{
    palyerPaddle.position = (e.y / window.innerHeight) *100
})

window.requestAnimationFrame(update);