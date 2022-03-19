class Snake{
  head:HTMLElement
  bodies:HTMLCollection
  element:HTMLElement

  constructor(){
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.bodies = this.element.getElementsByTagName('div')
  }

  get X(){
    return this.head.offsetLeft
  }

  get Y(){
    return this.head.offsetTop
  }

  set X(value:number){
    if(this.X === value) return

    if(value < 0 || value >290){
      throw new Error('蛇撞墙了！')
    }

    // 禁止蛇掉头
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      if(value > this.X){
        value = this.X - 10
      }else{
        value = this.X + 10
      }
    }

    this.moveBody()

    this.head.style.left = value + 'px'

    this.checkHeadBody()
  }

  set Y(value:number){
    if(this.Y === value) return

    if(value < 0 || value >290){
      throw new Error('蛇撞墙了！')
    }

    // 禁止蛇掉头
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y){
        value = this.Y - 10
      }else{
        value = this.Y + 10
      }
    }

    this.moveBody()

    this.head.style.top = value + 'px'

    this.checkHeadBody()
  }

  // 吃到食物后增加身体长度
  addBody(){
    let div = document.createElement('div')
    this.element.insertAdjacentElement("beforeend",div)
  }

  //移动蛇的后面几节身体
  moveBody(){
    for(let i = this.bodies.length - 1; i > 0; i--){
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 判断蛇有没有撞到自己
  checkHeadBody(){
    for(let i = 1;i<this.bodies.length;i++){
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('撞到自己啦！')
      }
    }
  }
}

export default Snake