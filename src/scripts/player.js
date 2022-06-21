class Player {
    constructor({ pos, color = "#AFEEEE" }) {
        this.pos = pos;
        this.color = color;
        this.width = 100;
        this.height = 75;
    }
    
    draw() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
        let playerImg = document.getElementById("player_img")
        ctx.drawImage(playerImg, this.pos.x, this.pos.y, this.width, this.height);
    };
    
}

    
export default Player;
