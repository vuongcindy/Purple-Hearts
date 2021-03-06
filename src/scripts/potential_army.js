const songDisplayElement = document.getElementById('songDisplay');
const songInputElement = document.getElementById('songInput');

class PotentialArmy {
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
        let cat1Img = document.getElementById("potential_army")
        
        ctx.drawImage(cat1Img, this.pos.x, this.pos.y, this.width, this.height);
        
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

    // updateSong() {
    //     songDisplayElement.textContent = null;
    //     this.currentSong.split('').forEach(char => {
    //         const charSpan = document.createElement('span')
    //         charSpan.innerText = char
    //         songDisplayElement.appendChild(charSpan)
    //     })
    // }

    // processInputText() {
    //     let charTyped = 0
    //     let currentInput = songInputElement.value;
    //     let currentInputArr = currentInput.split('');

    //     charTyped++;

    //     songSpanArr = songDisplayElement.querySelectorAll('span');
    //     songSpanArr.forEach((char, i) => {
    //         let typedChar = currentInputArr[i];

    //         //char not currently typed
    //         if (typedChar === null) {
    //             char.classList.remove('correctChar');
    //             char.classList.remove('incorrectChar');
    //         } else if (typedChar === char.innerText) {
    //             char.classList.add('correctChar');
    //             char.classList.remove('incorrectChar');
    //         } else {
    //             char.classList.add('incorrectChar');
    //             char.classList.remove('correctChar');
    //         }
    //     });
    // }
}

export default PotentialArmy;