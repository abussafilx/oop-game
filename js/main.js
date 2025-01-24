class Player {
    constructor() {
        this.positionX = 10;
        this.positionY = 0;
        this.width = 20;
        this.heigth = 10;

        this.playerElm = document.getElementById("player")
        this.draw();


    }

    draw() {
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.heigth + "vh";
    }

    moveLeft() {
        if (this.positionX > 0) {
        this.positionX--;
        this.draw();
    }}

    moveRight() {
        if (this.positionX < 90) {
        this.positionX++;
        this.draw();}

    }

    moveUp() {
        if (this.positionY < 90) {
        this.positionY++;
        this.draw();}

    }

    moveDown() {
        if (this.positionY > 0) {
        this.positionY--;
        this.draw();

    }}
}

const player = new Player();

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft();
    } else if (e.code === "ArrowRight") {
        player.moveRight();
    } else if (e.code === "ArrowUp") {
        player.moveUp();
    } else if (e.code === "ArrowDown") {
        player.moveDown();
    }
})
