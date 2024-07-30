import './style.css'

let canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width =window.innerWidth
canvas.height=window.innerHeight
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let middle=[canvas.width/2, canvas.height/2]

let radius = 1
let angel = 0
ctx.beginPath()
ctx.moveTo(middle[0], middle[1])
while (radius<700){
    radius*=1.01
    angel+=0.05
    let x = middle[0] + Math.cos(angel)*radius
    let y = middle[1] + Math.sin(angel)*radius
    ctx.lineTo(x, y)
    ctx.strokeStyle = 'blue'
    ctx.stroke()
}
