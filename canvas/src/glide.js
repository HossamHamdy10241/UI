const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const object = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 0,
  maxSpeed: 5,
  angle: 0,
  friction: 0.98,
  acceleration: 0.6
};

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

function update() {
  if (keys.up) object.speed = Math.min(object.speed + object.acceleration, object.maxSpeed);
  if (keys.down) object.speed = Math.max(object.speed - object.acceleration, -object.maxSpeed);
  if (keys.left) object.angle -= 0.05;
  if (keys.right) object.angle += 0.05;

  object.x += object.speed * Math.cos(object.angle);
  object.y += object.speed * Math.sin(object.angle);

  object.speed *= object.friction;

  // Wrap around edges
  if (object.x < 0) object.x = canvas.width;
  if (object.x > canvas.width) object.x = 0;
  if (object.y < 0) object.y = canvas.height;
  if (object.y > canvas.height) object.y = 0;
}

function draw() {
    ctx.fillStyle='rgba(0,0,0,0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(object.x, object.y);
  ctx.rotate(object.angle);
  ctx.fillStyle = 'blue';
  ctx.fillRect(-10, -10, 20, 20);
  ctx.restore();
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

animate();
