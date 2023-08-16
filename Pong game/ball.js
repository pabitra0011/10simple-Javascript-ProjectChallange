 const Inatial_velocity = .025
 const velocity_increse = .00001;
export default class Ball{
    constructor(ballElement){
        this.ballElement = ballElement;
        this.reset()
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"))
    }
    set x(value){
        this.ballElement.style.setProperty("--x",value)
    }
    get y(){
        return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"))
    }
    set y(value){
        this.ballElement.style.setProperty("--y",value)
    }

    rect(){
        return this.ballElement.getBoundingClientRect()
    }
   
    reset(){
        this.x= 50;
        this.y = 50;
        this.direction = {x: 0}

        while(Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
            const heading = randomNumberBetween(0, 2*Math.PI)
            this.direction = {x:Math.cos(heading), y:Math.sin(heading)}
        }
        this.velocity = Inatial_velocity
    }

    update(delta,paddleRects){
      this.x += this.direction.x * this.velocity * delta
      this.y += this.direction.y * this.velocity * delta
      this.velocity += velocity_increse * delta
      const rect = this.rect();

      if(rect.bottom >= window.innerHeight || rect.top <= 0){
        this.direction.y *= -1;
      }
      if(paddleRects.some(r => isCollision(r,rect))){
        this.direction.x *= -1;
      }

    }
}

function randomNumberBetween(min,max){
    return Math.random() * (max-min) + min;
}


function isCollision(rect1,rect2){
    return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top 
    )
}