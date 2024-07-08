import './style.css'

let canvas=document.querySelector('canvas') as HTMLCanvasElement;
canvas.width =window.innerWidth
canvas.height=window.innerHeight
let ctx=canvas?.getContext('2d') as CanvasRenderingContext2D

let midheight = window.innerHeight/2
let midwidth = window.innerWidth/2

class Dot{
  x:number
  y:number
  speed:number
  radious:number
  color:string
  angel:number

  constructor(color:string){
    this.radious = Math.floor(Math.random()*300)
    this.angel=1
    this.speed=(Math.random()*2+3)/100 
    this.x=midwidth + Math.cos(this.angel)*this.radious
    this.y=midheight + Math.sin(this.angel)*this.radious
    // this.radius=Math.sqrt(x-midwidth**2 + y-midheight**2)
    this.color=color

  }
  draw(){
    ctx.beginPath()
    ctx.arc( this.x, this.y, 2, 0, Math.PI*2)
    ctx.fillStyle=this.color
    ctx.fill()
  }
  update(){
    this.angel+=this.speed
    this.x = midwidth + Math.cos(this.angel)*this.radious
    this.y = midheight + Math.sin(this.angel)*this.radious
    // this.radious-=1
  }

}

let dots :Dot[] = []
for(let i=0; i<10; i++){
  dots.push(new Dot( 'hsl(' + Math.random()*360 + ', 100%, 50%)'))
}





function animate(){
  ctx.fillStyle = 'rgba(0,0,0,0.1)'  //black background
  ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
  dots.forEach(dot => {
    dot.update()
    dot.draw()
  })
  requestAnimationFrame(animate)
}
animate()