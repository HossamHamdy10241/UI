export class Opsticle{
    color:string;
    width:number;
    height:number;
    x:number;
    y:number;
    constructor(color:string, width:number, height:number, xo:number,xi:number, y:number){
        this.color=color;
        this.width=width;
        this.height=height;
        this.x=Math.random()>0.5?xo:xi;
        this.y=y;
    }
    draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(speed:number){
        this.y+=speed;
    }

    

}