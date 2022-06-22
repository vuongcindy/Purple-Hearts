const songDisplayElement = document.getElementById('songDisplay');
const songInputElement = document.getElementById('songInput');

class PotentialArmy {
    constructor({ pos, color = "black", velX = 0}) {
        this.pos = pos;
        this.color = color;
        this.width = 85;
        this.height = 65;
        this.velX = velX;
        this.SONGS = ["kn","ks","my","jh","pj","kt","jj"];
        this.currentSong = "";
        this.getRandomSong();
        
        // this.NUM_POTENTIAL_ARMY = this.SONGS.length;
    }

    randomStartPos() {
        const possibleYPos = [35, 235, 420];
        let tempX = 798;
        let tempY = possibleYPos[Math.floor((Math.random() * possibleYPos.length))];
        this.pos = { x: tempX, y: tempY }
    }

    drawPA() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        let cat1Img = document.getElementById("cat_1")
        ctx.drawImage(cat1Img, this.pos.x, this.pos.y, this.width, this.height);
        
        ctx.fillStyle = "black"
        ctx.fillText(this.currentSong, this.pos.x + 27, this.pos.y + 75);
    }

    clear() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(this.pos.x, this.pos.y, this.width, this.height)
        // alpha = 0;
    }

    getRandomSong() {
        this.currentSong = this.SONGS[Math.floor(Math.random() * (this.SONGS.length - 1))]
    }

    updatePos() {
        if (this.pos.x > 35) {
            this.pos.x += (-2);
        } else if (this.pos.x <= 35) {
            this.clear()
        }
    }

    // updateSong() {
    //     songDisplayElement.textContent = null;
    //     this.currentSong.split('').forEach(char => {
    //         const charSpan = document.createElement('span')
    //         charSpan.innerText = char
    //         songDisplayElement.appendChild(charSpan)
    //     })
    // }

    // processInputText() {
    //     currentInput = songInputElement.value;
    //     currentInputArr = currentInput.split('');

    //     characterTyped++;

    //     songSpan
    // }
}

export default PotentialArmy;