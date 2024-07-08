
export class Dot {
    x: number;
    y: number;
    speed: number;
    radious: number;
    color: string;
    angel: number;
  
    constructor(color: string, centerX:number,centerY:number) {
      this.radious = Math.floor(Math.random() * 300);
      this.angel = 1;
      this.speed = (Math.random() * 2 + 3) / 100;
      this.x = centerX + Math.cos(this.angel) * this.radious;
      this.y = centerY + Math.sin(this.angel) * this.radious;
      // this.radius=Math.sqrt(x-midwidth**2 + y-midheight**2)
      this.color = color;
    }
}