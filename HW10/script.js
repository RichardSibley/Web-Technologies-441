const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const spaceshipImg = new Image();
const asteroidImg = new Image();

let imagesLoaded = 0;
spaceshipImg.src = "Images/Ship.png";
asteroidImg.src = "Images/Asteroid.png";

spaceshipImg.onload = () => checkImagesLoaded();
asteroidImg.onload = () => checkImagesLoaded();

function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 2) {
        gameLoop(); 
    }
}

class GameObject {
    constructor(x, y, size, img, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.img = img;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw() {
        ctx.drawImage(this.img, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x - this.size < 0 || this.x + this.size > canvas.width) {
            this.speedX *= -1;
        }
        if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
            this.speedY *= -1;
        }
    }
}

const player = new GameObject(100, 100, 40, spaceshipImg, 0, 0);
const enemy = new GameObject(300, 200, 50, asteroidImg, 3, 3);

let keys = {};
let musicStarted = false;

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;

    if (!musicStarted) {
        const bgMusic = document.getElementById("bg-music");
        bgMusic.volume = 0.15;
        bgMusic.play().catch(error => console.log("Autoplay blocked:", error));
        musicStarted = true;
    }
});
window.addEventListener("keyup", (e) => delete keys[e.key]);

function movePlayer() {
    if (keys["ArrowUp"] && player.y - player.size > 0) player.y -= 5;
    if (keys["ArrowDown"] && player.y + player.size < canvas.height) player.y += 5;
    if (keys["ArrowLeft"] && player.x - player.size > 0) player.x -= 5;
    if (keys["ArrowRight"] && player.x + player.size < canvas.width) player.x += 5;
}

function checkCollision() {
    let dx = player.x - enemy.x;
    let dy = player.y - enemy.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < player.size + enemy.size) {
        document.body.style.background = "url('Images/Collision.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        player.size = 50;
        enemy.size = 60;
    } else {
        document.body.style.background = "url('Images/SpaceBackground.png') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        player.size = 40;
        enemy.size = 50;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePlayer(); 
    enemy.move(); 
    checkCollision();
    player.draw();
    enemy.draw();
    requestAnimationFrame(gameLoop);
}
