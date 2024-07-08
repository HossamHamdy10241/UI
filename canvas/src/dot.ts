export class Dot {
  x: number;
  y: number;
  centerX:number
  centerY:number
  speed: number;
  radious: number;
  color: string;
  size:number
  angel: number;

  constructor(color: string, centerX: number, centerY: number) {
    this.radious = Math.floor(Math.random() * 450);
    this.angel = 1;
    this.centerX = centerX
    this.centerY = centerY;
    this.size = Math.floor(Math.random() * 12)+1;
    this.speed = (Math.random() * 3 + 1) / 100;
    this.x = centerX + Math.cos(this.angel) * this.radious;
    this.y = centerY + Math.sin(this.angel) * this.radious;
    // this.radius=Math.sqrt(x-midwidth**2 + y-midheight**2)
    this.color = color;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.angel += this.speed;
    this.x = this.centerX + Math.cos(this.angel) * this.radious;
    this.y = this.centerY + Math.sin(this.angel) * this.radious;
    this.radious -= 0.2;
  }
}
