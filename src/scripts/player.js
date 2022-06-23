// import Heart from "./heart";
class Player {
    constructor({ pos, color = "white" }) {
        this.pos = pos;
        this.color = color;
        this.width = 85;
        this.height = 65;
        this.livesRemaining = 3;
    }
    
    draw() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");

        let playerImg = document.getElementById("player_img")
        ctx.drawImage(playerImg, this.pos.x, this.pos.y, this.width, this.height);
    };

    shootHeart() {
        const heart = new Heart({
            pos: this.pos,
            vel: 3,
            color: this.color
        })
        this.game.add(heart)
    }
    
} 

    
export default Player;
