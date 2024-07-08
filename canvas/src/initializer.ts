export function initalize(){
    let canvas = document.querySelector("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
return canvas?.getContext("2d") as CanvasRenderingContext2D;
}