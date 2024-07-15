import "./style.css";
import { initalize } from "./initializer";
import { Opsticle } from "./obsticle";

let ctx = initalize();
let width = window.innerWidth;
let height = window.innerHeight;

let maincirc = {
  x: width / 2,
  y: height / 1.4,
  color: "white",
  radius: 100,
  draw(crc: CanvasRenderingContext2D) {
    crc.strokeStyle = "rgba(255,255,255,0.05)";
    crc.beginPath();
    crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    crc.closePath();
    crc.stroke();
  },
};

let cerciles = {
  change: 0,
  x: width / 2,
  y: height / 1.4,
  ange:Math.PI/170,
  radius: 14,
  bigrad: 100,
  blueang: 0,
  redang: Math.PI,
  blueX: 100 * Math.cos(0),
  blueY: 100 * Math.sin(0),
  redX: 100 * Math.cos(Math.PI),
  redY: 100 * Math.sin(Math.PI),
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(
      this.x + this.blueX,
      this.y + this.blueY,
      this.radius,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(
      this.x + this.redX,
      this.y + this.redY,
      this.radius,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
  },
  updat() {
    if (keys.left) {
      this.change = -this.ange*4;
    } else if (keys.right) {
      this.change = this.ange*4;
    } else {
      // Math.abs(this.change)<.006? this.change=0:this.change *=.98 ;
      this.change=0
    }
    this.blueang += this.change;
    this.redang += this.change;
    this.blueX = this.bigrad * Math.cos(this.blueang);
    this.blueY = this.bigrad * Math.sin(this.blueang);
    this.redX = this.bigrad * Math.cos(this.redang);
    this.redY = this.bigrad * Math.sin(this.redang);
  },
};
const keys = {
  left: false,
  right: false,
};

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") keys.left = true;
  if (e.key === "ArrowRight") keys.right = true;
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") keys.left = false;
  if (e.key === "ArrowRight") keys.right = false;
});
let ops = new Opsticle('rgba(255,255,255,0.6)',150,30,width/2,width/2-150,25)
let opsX:number[]=[]
let opsY:number[]=[]
let count:number = 5
for(let i = 0;i<count;i++){
  let s = Math.random()
  s>.5? opsX[i]=width/2:opsX[i]=width/2-160;
  opsY[i]=height-340-i*170

}
let higher:number= opsY[count-1]+170


function animate() {
  // ctx.fillStyle = "rgba(0,0,0,0.4)";
  // ctx.fillRect(0, 0, width, height);
  ctx.clearRect(0, 0, width, height);
  maincirc.draw(ctx);
  cerciles.draw(ctx);
  for(let i = 0; i<count; i++){
    ctx.fillStyle='white';
    ctx.fillRect(opsX[i],opsY[i],150,30)
    opsY[i]+=4;
    if(opsY[i]>= height){
      Math.random()>.5?opsX[i]=width/2:opsX[i]=width/2-160;
      // console.log(opsY)
      opsY[i]=higher
      
    }
  }

 
  cerciles.updat();
  requestAnimationFrame(animate);
}
animate();
