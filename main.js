const canWidth = 650
const canHeight = 300

let x = 0
const y = 0

const trackLeft = 1
const trackRight = 0

let srcX, srcY

const sheetWidth = 864
const sheetHeight = 280


const cols = 8
const rows = 2

const width = sheetWidth / cols  //108
const height = sheetHeight / rows

let currentFrame = 0

const character = new Image()
character.src = 'character.png'

const canvas = document.getElementById('canvas')
canvas.width = canWidth
canvas.height = canHeight
const ctx = canvas.getContext('2d')
// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, canvas.width, canvas.height)


const updateFrame = (track) => {
    currentFrame = ++currentFrame % cols
    srcX = currentFrame * width
    srcY = track * height

    ctx.clearRect(x, y, width, height)
}

const drawImage = (track) => {
    updateFrame(track)
    // x+=4
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height)
};

var id = setInterval(function () {
    drawImage(0)
}, 100);
