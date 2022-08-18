const textDisplayElement = document.getElementById('textDisplay');
const textInputElement = document.getElementById('textInput');

class Enemy {
    constructor({ pos, color = "black", velX = 0}) {
        this.pos = pos;
        this.color = color;
        this.width = 85;
        this.height = 65;
        this.velX = velX;
        this.SONGS = ["dynamite","friends","moon","respect","filter","dimple", "dna", "stay", "home", "begin", "lie", "awake", "lost", "stigma", "fire", "dope", "like", "coffee", "jump", "danger", "run", "mama", "idol", "tear", "home", "on", "lights", "butter", "her"];
        this.currentSong = "";
        this.getRandomSong();
        
        // this.NUM_POTENTIAL_ARMY = this.SONGS.length;
    }

    randomStartPos() {
        const possibleYPos = [35, 235, 420];
        let tempX = 1100;
        let tempY = possibleYPos[Math.floor((Math.random() * possibleYPos.length))];
        this.pos = { x: tempX, y: tempY }
    }

    drawPA() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        let enemy = document.getElementById("enemy_img")
        
        ctx.drawImage(enemy, this.pos.x, this.pos.y, this.width, this.height);
        
        ctx.fillStyle = "black"
        ctx.fillText(this.currentSong, this.pos.x + 10, this.pos.y + 75);
    }

    clear() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height)
        this.currentSong = "";
    }

    getRandomSong() {
        this.currentSong = this.SONGS[Math.floor(Math.random() * (this.SONGS.length - 1))]
    }

    updatePos() {
        let level = parseInt(document.getElementById('current_level').innerHTML)

        if (this.pos.x > 35) {
            this.pos.x += (-1 * level);
        } else if (this.pos.x <= 35) {
            this.clear()
        }
    }
}

export default Enemy;