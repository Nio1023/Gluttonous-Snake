import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
  snake:Snake
  food:Food
  scorePanel:ScorePanel

  mobileUp:HTMLElement
  mobileDown:HTMLElement
  mobileLeft:HTMLElement
  mobileRight:HTMLElement

  direction:string = ''

  isLive = true
  
  constructor(){
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanel = new ScorePanel()
    this.mobileUp = document.getElementById('up')!
    this.mobileDown = document.getElementById('down')!
    this.mobileLeft = document.getElementById('left')!
    this.mobileRight = document.getElementById('right')!
    this.init()
  }

  init(){
    this.snake.init()
    this.food.change()
    document.addEventListener('keydown',this.keydownHandler.bind(this))
    this.mobileUp.addEventListener('click',this.mobiledownHandler.bind(this,'Up'))
    this.mobileDown.addEventListener('click',this.mobiledownHandler.bind(this,'Down'))
    this.mobileLeft.addEventListener('click',this.mobiledownHandler.bind(this,'Left'))
    this.mobileRight.addEventListener('click',this.mobiledownHandler.bind(this,'Right'))
    this.run()
  }

  keydownHandler(event:KeyboardEvent){
    this.direction = event.key
  }

  mobiledownHandler(key:string,event:MouseEvent){
    this.direction = key
  }

  run(){
    let X = this.snake.X
    let Y = this.snake.Y
    console.log(X,Y)
    switch(this.direction){
      case "ArrowUp":
      case "Up":
        Y -= 10
        break;
      case "ArrowDown":
      case "Down":
        Y += 10
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10
        break;
      case "ArrowRight":
      case "Right":
        console.log('111')
        X += 10
        break;
    }

    this.checkEat(X, Y)
    
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error:any) {
      alert(error.message + 'Game Over!')
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - ( this.scorePanel.level - 1 ) * 30)
  }
  
  checkEat(X:number, Y:number){
    if(X === this.food.X && Y == this.food.Y){
      this.food.change()

      this.scorePanel.addScore()

      this.snake.addBody()
    }
  }
}

export default GameControl