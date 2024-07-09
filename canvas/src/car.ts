import "./style.css"

let canvas=document.querySelector('canvas') as HTMLCanvasElement;
canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


let car={
    x:200,
    y:200,
    size:20,
    color:'red'
}


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
    ctx.fillStyle=car.color;
    ctx.fillRect(car.x,car.y,car.size,car.size);
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawCar();
    requestAnimationFrame(animate);
}
animate()