// const rulesButton = document.getElementById("rules-btn");
// const closeButton = document.getElementById("close-btn");
// const rules = document.getElementById("rules");
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const color = getComputedStyle(document.documentElement).getPropertyValue(
//   "--button-color"
// );
// const secondaryColor = getComputedStyle(
//   document.documentElement
// ).getPropertyValue("--sidebar-color");
// let score = 0;
// const brickRowCount = 9;
// const brickColumnCount = 5;

// // Reference: https://stackoverflow.com/questions/34772957/how-to-make-canvas-responsive
// // https://stackoverflow.com/questions/39771732/drawing-to-responsive-canvas-that-is-100-width-and-height
// const heightRatio = 0.75;
// canvas.height = canvas.width * heightRatio;
// ctx.canvas.width = 800;
// ctx.canvas.height = ctx.canvas.width * heightRatio;

// // Elements
// const ball = {
//   x: canvas.width / 2,
//   y: canvas.height / 2,
//   size: 10,
//   speed: 4,
//   dx: 4,
//   dy: -4,
// };

// const paddle = {
//   x: canvas.width / 2 - 40,
//   y: canvas.height - 20,
//   w: 80,
//   h: 10,
//   speed: 8,
//   dx: 0,
// };

// const brickInfo = {
//   w: 70,
//   h: 20,
//   padding: 10,
//   offsetX: 45,
//   offsetY: 60,
//   visible: true,
// };

// const bricks = [];
// for (let i = 0; i < brickRowCount; i++) {
//   bricks[i] = [];
//   for (let j = 0; j < brickColumnCount; j++) {
//     const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
//     const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
//     bricks[i][j] = { x, y, ...brickInfo };
//   }
// }

// // Create Elements
// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
//   ctx.fillStyle = secondaryColor;
//   ctx.fill();
//   ctx.closePath();
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
//   ctx.fillStyle = color;
//   ctx.fill();
//   ctx.closePath();
// }

// function drawScore() {
//   ctx.font = '20px "Balsamiq Sans"';
//   ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
// }

// function drawBricks() {
//   bricks.forEach((column) => {
//     column.forEach((brick) => {
//       ctx.beginPath();
//       ctx.rect(brick.x, brick.y, brick.w, brick.h);
//       ctx.fillStyle = brick.visible ? color : "transparent";
//       ctx.fill();
//       ctx.closePath();
//     });
//   });
// }

// function draw() {
//   // clear
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // draw
//   drawBall();
//   drawPaddle();
//   drawScore();
//   drawBricks();
// }

// // Animate Elements
// function movePaddle() {
//   paddle.x += paddle.dx;
//   if (paddle.x + paddle.w > canvas.width) paddle.x = canvas.width - paddle.w;
//   if (paddle.x < 0) paddle.x = 0;
// }

// function moveBall() {
//   ball.x += ball.dx;
//   ball.y += ball.dy;
//   // wall collision
//   if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
//     // right and left
//     ball.dx *= -1;
//   }
//   if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
//     // top and bottom
//     ball.dy *= -1;
//   }
//   // paddle
//   if (
//     ball.x - ball.size > paddle.x &&
//     ball.x + ball.size < paddle.x + paddle.w &&
//     ball.y + ball.size > paddle.y
//   ) {
//     ball.dy = -ball.speed;
//   }
//   // bricks
//   bricks.forEach((column) => {
//     column.forEach((brick) => {
//       if (brick.visible) {
//         if (
//           ball.x - ball.size > brick.x && // left brick side check
//           ball.x + ball.size < brick.x + brick.w && // right brick side check
//           ball.y + ball.size > brick.y && // top brick side check
//           ball.y - ball.size < brick.y + brick.h // bottom brick side check
//         ) {
//           ball.dy *= -1;
//           brick.visible = false;
//           increaseScore();
//         }
//       }
//     });
//   });
//   // game over
//   if (ball.y + ball.size > canvas.height) {
//     showAllBricks();
//     score = 0;
//   }
// }

// function increaseScore() {
//   score++;
//   if (score % (brickRowCount * brickRowCount) === 0) {
//     // no remainder
//     showAllBricks();
//   }
// }

// function showAllBricks() {
//   bricks.forEach((column) => {
//     column.forEach((brick) => (brick.visible = true));
//   });
// }

// // Handle Key Events
// function keyDown(e) {
//   if (e.key === "Right" || e.key === "ArrowRight") paddle.dx = paddle.speed;
//   else if (e.key === "Left" || e.key === "ArrowLeft") paddle.dx = -paddle.speed;
// }

// function keyUp(e) {
//   if (
//     e.key === "Right" ||
//     e.key === "ArrowRight" ||
//     e.key === "Left" ||
//     e.key === "ArrowLeft"
//   ) {
//     paddle.dx = 0;
//   }
// }

// // Update Canvas
// function update() {
//   // update
//   movePaddle();
//   moveBall();
//   // draw
//   draw();
//   requestAnimationFrame(update);
// }



// const leftButton = document.getElementById('left-btn');
// const rightButton = document.getElementById('right-btn');


// leftButton.addEventListener('touchstart', () => paddle.dx = -paddle.speed);
// leftButton.addEventListener('touchend', () => paddle.dx = 0);
// rightButton.addEventListener('touchstart', () => paddle.dx = paddle.speed);
// rightButton.addEventListener('touchend', () => paddle.dx = 0);

// leftButton.addEventListener('mousedown', () => paddle.dx = -paddle.speed);
// leftButton.addEventListener('mouseup', () => paddle.dx = 0);
// rightButton.addEventListener('mousedown', () => paddle.dx = paddle.speed);
// rightButton.addEventListener('mouseup', () => paddle.dx = 0);

// document.addEventListener("keydown", keyDown);
// document.addEventListener("keyup", keyUp);
// rulesButton.addEventListener("click", () => rules.classList.add("show"));
// closeButton.addEventListener("click", () => rules.classList.remove("show"));


// update();




const rulesButton = document.getElementById("rules-btn");
const closeButton = document.getElementById("close-btn");
const rules = document.getElementById("rules");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Select the left and right buttons for mobile
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

const color = getComputedStyle(document.documentElement).getPropertyValue(
  "--button-color"
);
const secondaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--sidebar-color");

let score = 0;
const brickRowCount = 9;
const brickColumnCount = 5;

const heightRatio = 0.75;
ctx.canvas.width = 800;
ctx.canvas.height = ctx.canvas.width * heightRatio;

// Paddle object
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};

// Ball object
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};

// Brick info
const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
};

// Create bricks array
const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = secondaryColor;
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

// Draw score on canvas
function drawScore() {
  ctx.font = '20px "Balsamiq Sans"';
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw bricks on canvas
function drawBricks() {
  bricks.forEach((column) => {
    column.forEach((brick) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? color : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
}

// Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

// Move paddle on canvas
function movePaddle() {
  paddle.x += paddle.dx;

  // Wall detection
  if (paddle.x + paddle.w > canvas.width) paddle.x = canvas.width - paddle.w;
  if (paddle.x < 0) paddle.x = 0;
}

// Move ball on canvas
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Wall collision (x)
  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1; // Reverse the direction
  }

  // Wall collision (y)
  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1; // Reverse the direction
  }

  // Paddle collision
  if (
    ball.x - ball.size > paddle.x &&
    ball.x + ball.size < paddle.x + paddle.w &&
    ball.y + ball.size > paddle.y
  ) {
    ball.dy = -ball.speed; // Reverse the direction
  }

  // Brick collision
  bricks.forEach((column) => {
    column.forEach((brick) => {
      if (brick.visible) {
        if (
          ball.x - ball.size > brick.x &&
          ball.x + ball.size < brick.x + brick.w &&
          ball.y + ball.size > brick.y &&
          ball.y - ball.size < brick.y + brick.h
        ) {
          ball.dy *= -1; // Reverse the direction
          brick.visible = false; // Hide the brick
          increaseScore();
        }
      }
    });
  });

  // Missed the ball (reset)
  if (ball.y + ball.size > canvas.height) {
    showAllBricks();
    score = 0;
  }
}

// Increase score
function increaseScore() {
  score++;
  if (score % (brickRowCount * brickColumnCount) === 0) {
    showAllBricks();
  }
}

// Make all bricks appear again
function showAllBricks() {
  bricks.forEach((column) => {
    column.forEach((brick) => (brick.visible = true));
  });
}

// Move paddle left
function movePaddleLeft() {
  paddle.dx = -paddle.speed;
}

// Move paddle right
function movePaddleRight() {
  paddle.dx = paddle.speed;
}

// Stop paddle movement
function stopPaddle() {
  paddle.dx = 0;
}

// Handle keyboard events
function keyDown(e) {
  if (e.key === "Right" || e.key === "ArrowRight") movePaddleRight();
  else if (e.key === "Left" || e.key === "ArrowLeft") movePaddleLeft();
}

function keyUp(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key === "Left" || e.key === "ArrowLeft") {
    stopPaddle();
  }
}

// Handle touch and mouse events for mobile
leftButton.addEventListener('touchstart', movePaddleLeft);
leftButton.addEventListener('touchend', stopPaddle);
rightButton.addEventListener('touchstart', movePaddleRight);
rightButton.addEventListener('touchend', stopPaddle);

leftButton.addEventListener('mousedown', movePaddleLeft);
leftButton.addEventListener('mouseup', stopPaddle);
rightButton.addEventListener('mousedown', movePaddleRight);
rightButton.addEventListener('mouseup', stopPaddle);

// Update game canvas
function update() {
  movePaddle();
  moveBall();
  draw();
  requestAnimationFrame(update);
}

// Resize canvas to be responsive
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  canvas.width = Math.min(window.innerWidth * 0.9, 800);
  canvas.height = canvas.width * heightRatio;
  draw();
}

resizeCanvas(); // Set initial canvas size

// Event Listeners
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
rulesButton.addEventListener("click", () => rules.classList.add("show"));
closeButton.addEventListener("click", () => rules.classList.remove("show"));

// Initialize game
update();
