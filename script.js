const main = document.getElementById("main")
let gamePiece

function startGame() {
  gameArea.start()
  gamePiece = new Component(30, 30, "red", 10, 120)
}

function updateGame() {
  gameArea.clear()
  gamePiece.newPos()
  gamePiece.update()
}

function up() {
  gamePiece.speedY -= 1
}

function down() {
  gamePiece.speedY += 1
}

function left() {
  gamePiece.speedX -= 1
}

function right() {
  gamePiece.speedX += 1
}

function stop() {
  gamePiece.speedX = 0
  gamePiece.speedY = 0
}

const gameArea = {
  canvas: document.createElement("canvas"),
  start() {
    this.canvas.width = 480
    this.canvas.height = 270
    this.context = this.canvas.getContext("2d")
    main.insertBefore(this.canvas, main.childNodes[0])
    this.interval = setInterval(updateGameArea, 20)
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width
    this.height = height
    this.speedX = 0
    this.speedY = 0
    this.color = color
    this.x = x
    this.y = y
  }
  update() {
    ctx = gameArea.context
    ctx.fillStyle = color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
}

startGame()
