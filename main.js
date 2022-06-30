console.log('hello world')
var canvas = document.querySelector('canvas')
console.log(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext('2d')

var cubeOne =  {
    x: 100,
    y: 100,
    xDir: -1,
    yDir: 1,
    width: 200,
    height: 200,
    color: 'red',

    draw: function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    },
    move: function(xSpeed, ySpeed) {
        this.x += xSpeed * this.xDir
        this.y += ySpeed * this.yDir
    },
    handleBounce: function() {
        if (this.x <= 0 || this.x + this.width>= canvas.width) {
            this.xDir = -this.xDir
        }
        if (this.y <= 0 || this.y + this.height>= canvas.height) {
            this.yDir = -this.yDir
        }
    }
}

function frameLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    
    cubeOne.draw()
    cubeOne.move(5,5)
    cubeOne.handleBounce()


    requestAnimationFrame(frameLoop)
}

frameLoop()