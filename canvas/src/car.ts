import "./style.css"

let canvas=document.querySelector('canvas') as HTMLCanvasElement;
canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let car={
    x:200,
    y:200,
    size:20,
    dx:0,
    color:'red',
    angel:0
}

ctx.translate(car.x, car.y);

const keys = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') keys.up = true;
    if (e.key === 'ArrowDown') keys.down = true;
    if (e.key === 'ArrowLeft') keys.left = true;
    if (e.key === 'ArrowRight') keys.right = true;
  });
  
  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp') keys.up = false;
    if (e.key === 'ArrowDown') keys.down = false;
    if (e.key === 'ArrowLeft') keys.left = false;
    if (e.key === 'ArrowRight') keys.right = false;
  });
  
function drawCar(){
   
   
   ctx.translate(car.dx,0)
   ctx.rotate(car.angel);
   ctx.fillStyle = car.color;
   ctx.fillRect(-car.size/2, -car.size/2, car.size, car.size);
}
function update(){
    if(keys.up){
        car.dx=2

    }
    else if(keys.down){
        car.dx=-2
    }
    else {car.dx=0}
   
    if(keys.left){
        car.angel=-0.08
    }
    else if(keys.right){
        car.angel=0.08
    }
    else{car.angel=0}

}

function animate(){
    ctx.fillStyle='rgba(0,0,0,.1)'
    ctx.fillRect(-canvas.width,-canvas.height, 2*canvas.width, 2*canvas.height);
    update();
    drawCar();
    // car.angel+=0.05
    requestAnimationFrame(animate);
}
animate()