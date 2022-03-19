class Food{

  elemnet:HTMLElement;

  constructor(){
    this.elemnet = document.getElementById('food')!
  }

  get X(){
    return this.elemnet.offsetLeft
  }

  get Y(){
    return this.elemnet.offsetTop
  }

  change(){
    this.elemnet.style.left = `${ Math.floor( Math.random() * 30) * 10 }px`
    this.elemnet.style.top = `${ Math.floor( Math.random() * 30) * 10 }px`
  }
}

export default Food