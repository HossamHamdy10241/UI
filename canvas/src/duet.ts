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
  radius: 90,
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
  radius: 14,
  bigrad: 90,
  blueang: 0,
  redang: Math.PI,
  blueX: 90 * Math.cos(0),
  blueY: 90 * Math.sin(0),
  redX: 90 * Math.cos(Math.PI),
  redY: 90 * Math.sin(Math.PI),
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
      this.change = -0.05;
    } else if (keys.right) {
      this.change = 0.05;
    } else {
      this.change = 0;
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


function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, width, height);
  maincirc.draw(ctx);
  cerciles.draw(ctx);
  cerciles.updat();
  requestAnimationFrame(animate);
}
animate();
