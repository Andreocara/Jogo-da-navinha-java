var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

var player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    speed: 5,
    moveLeft: false,
    moveRight: false
  };

  function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }

  function movePlayer() {
    if (player.moveLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (player.moveRight && player.x < canvas.width - player.width) {
      player.x += player.speed;
    }
  }

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    movePlayer();
    requestAnimationFrame(gameLoop);
  }
  requestAnimationFrame(gameLoop);

  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) {
      player.moveLeft = true;
    }
    if (event.keyCode === 39) {
      player.moveRight = true;
    }
  });
  
  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 37) {
      player.moveLeft = false;
    }
    if (event.keyCode === 39) {
      player.moveRight = false;
    }
  });
  