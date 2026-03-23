let map = [
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 1, 2],
];


let player = { x: 0, y: 0 };

let enemies = [
  { x: 6, y: 6 },
  { x: 2, y: 7 },
];

let canMove = false;
let life = 3;
let timer = 30;

let darkTimeout;
let cycleInterval;
let gameTimer;

const game = document.querySelector("#game");
const message = document.createElement("div");
message.classList.add("message");

function renderMap() {
  game.innerHTML = "";
  map.forEach((row, y) => {
    row.forEach((cell, x) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");

      if (cell === 1) tile.classList.add("wall");
      if (cell === 2) tile.classList.add("goal");

      if (player.x === x && player.y === y) {
        tile.classList.add("player");
      }

      if (enemies.some((e) => e.x === x && e.y === y)) {
        tile.classList.add("enemy");
      }

      game.appendChild(tile);
    });
  });
}

function renderStats() {
  const stats = document.querySelector(".stats");
  stats.innerHTML = `
  <div class="stats-box">
      <div class="stat">❤️ Lives: <span>${life}</span></div>
      <div class="stat">⏱ Time: <span>${timer}s</span></div>
      <div class="stat">🎯 Reach the portal</div>
      <div class="stat">🎮 Arrows to move</div>
  </div>
  `;
}

document.addEventListener("keydown", (e) => {
  if (!canMove) return;

  let newX = player.x;
  let newY = player.y;
  if (e.key === "ArrowUp") newY--;
  if (e.key === "ArrowDown") newY++;
  if (e.key === "ArrowLeft") newX--;
  if (e.key === "ArrowRight") newX++;
  if (map[newX] && map[newY][newX] !== 1) {
    player.x = newX;
    player.y = newY;
  }

  renderMap();
  checkGoal();
  checkEnemy();
});

function checkGoal() {
  if (map[player.y][player.x] === 2) {
    message.innerHTML = `
    <h2>YOU WON</h2>
    <button onclick="location.reload()">Next round</button>
    `;
    game.appendChild(message);

    clearInterval(cycleInterval);
    clearInterval(gameTimer);
    clearTimeout(darkTimeout);

    game.classList.remove("dark");
    canMove = false;
  }
}

function restart() {
  player.x = 0;
  player.y = 0;
}

function checkEnemy() {
  enemies.forEach((e) => {
    if (e.x === player.x && e.y === player.y) {
      life--;
      restart();
      renderMap();

      if (life === 0) {
        message.innerHTML = `
        <h2>YOU LOST</h2>
        <button onclick="location.reload()">Play Again</button>
        `;
        game.appendChild(message);

        clearInterval(cycleInterval);
        clearInterval(gameTimer);
        clearTimeout(darkTimeout);

        game.classList.remove("dark");
        canMove = false;
      }
    }
  });

  renderStats();
}

function cycle() {
  canMove = false;
  game.classList.remove("dark");

  darkTimeout = setTimeout(() => {
    canMove = true;
    game.classList.add("dark");
  }, 1000);
}

renderMap();
renderStats();
message.innerHTML = `
<button class="startBtn">START</button>
`;

game.appendChild(message);

const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {  game.removeChild(message)
  cycleInterval = setInterval(cycle, 5000);

  gameTimer = setInterval(() => {
    timer--;
    renderStats();

    if (timer <= 0) {
      clearInterval(gameTimer);
      clearInterval(cycleInterval);
      clearTimeout(darkTimeout);

      message.innerHTML = `
      <h2>TIME OVER</h2>
      <button onclick="location.reload()">Retry</button>
      `;

      game.appendChild(message);
      game.classList.remove("dark");
      canMove = false;
    }
  }, 1000);
});