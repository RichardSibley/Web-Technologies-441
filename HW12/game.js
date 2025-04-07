const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;
document.getElementById('score').innerText = score;

Promise.all([
  fetch('objects.json').then(res => res.json()),
  fetch('collectibles.json').then(res => res.json())
]).then(([obstacleData, collectibleData]) => {
  class Obstacle {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    draw() {
      ctx.fillStyle = 'brown';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class Collectible {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 20;
      this.height = 20;
      this.collected = false;
    }

    draw() {
      if (!this.collected) {
        ctx.fillStyle = 'gold';
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }

    checkCollision(player) {
      return !this.collected &&
             player.x < this.x + this.width &&
             player.x + player.width > this.x &&
             player.y < this.y + this.height &&
             player.y + player.height > this.y;
    }
  }

  class Player {
    constructor() {
      this.x = 10;
      this.y = 10;
      this.width = 30;
      this.height = 30;
      this.speed = 5;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
      }

    draw() {
      ctx.fillStyle = 'blue';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  const player = new Player();
  const obstacles = obstacleData.map(o => new Obstacle(o.x, o.y, o.width, o.height));
  const collectibles = collectibleData.map(c => new Collectible(c.x, c.y));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') player.move(0, -player.speed, obstacles);
    else if (e.key === 'ArrowDown') player.move(0, player.speed, obstacles);
    else if (e.key === 'ArrowLeft') player.move(-player.speed, 0, obstacles);
    else if (e.key === 'ArrowRight') player.move(player.speed, 0, obstacles);
  });

  function update() {
    collectibles.forEach(col => {
      if (col.checkCollision(player)) {
        col.collected = true;
        score++;
        document.getElementById('score').innerText = score;
      }
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obstacles.forEach(o => o.draw());
    collectibles.forEach(c => c.draw());
    player.draw();
  }

  function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
});
