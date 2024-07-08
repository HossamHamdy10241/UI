import "./style.css";
import { initalize } from "./initializer.ts";
import { Dot } from "./dot.ts";

let ctx = initalize();
const img = new Image(); // Create new img element
img.src = "public/black.png"; // Set source path

let midheight = window.innerHeight / 2;
let midwidth = window.innerWidth / 2;

let dots: Dot[] = [];

function init(n: number) {
  for (let i = 0; i < n; i++) {
    dots.push(
      new Dot(
        "hsl(" + Math.random() * 360 + ", 100%, 50%)",
        midwidth,
        midheight
      )
    );
  }
}

init(10);

let angel=0
 function animateimg(){
  ctx.save()
  ctx.translate(midwidth, midheight);
  ctx.rotate(angel);
  angel+=0.005
  ctx.drawImage(img,-100,-100,200,200)
  ctx.restore()

 }
function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.1)"; //black background
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  animateimg()
  dots.forEach((dot, i) => {
    dot.draw(ctx);
    dot.update();

    if (dot.radious < 2) {
      dots.splice(i, 1);
    }
  });
  requestAnimationFrame(animate);
}
animate();
// img.onload=()=>{
//   ctx.drawImage(img,midwidth-150,midheight-150,300,300);
// }
