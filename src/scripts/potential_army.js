const songDisplayElement = document.getElementById('songDisplay');
const songInputElement = document.getElementById('songInput');

class PotentialArmy {
    constructor({ pos, color = "black", velX = 0}) {
        this.pos = pos;
        this.color = color;
        this.width = 100;
        this.height = 75;
        this.velX = velX;
        this.SONGS = ["nj","ks","my","jh","pj","kt","jj"];
        this.currentSong = "";
        this.getRandomSong();
        this.currentPotentialArmy = [];
        this.NUM_POTENTIAL_ARMY = this.SONGS.length;
    }

    draw() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");

        let cat1Img = document.getElementById("cat_1")
        ctx.drawImage(cat1Img, this.pos.x, this.pos.y, this.width, this.height);

        ctx.fillStyle = "red"
        ctx.fillText(this.currentSong, this.pos.x + 27, this.pos.y + 75);
    }

    // addPotentialArmy() {
    //     this.currentPotentialArmy = [];
    //     while (this.currentPotentialArmy < this. NUM_POTENTIAL_ARMY) {
    //        this.currentPotentialArmy.push(new PotentialArmy({ pos: randomStartPos() }))
    //     } 
    // };

    // randomStartPos() {

    // }

    // songInputElement.addEventListener('input', () => {
    //     console.log('changed')
    // })

    getRandomSong() {
        this.currentSong = this.SONGS[Math.floor(Math.random() * (this.SONGS.length - 1))]
    }

    // async renderNewSong() {
    //     this.currentSong = await getRandomSong()
    //     songDisplayElement.innerHTML = ""
    //     this.currentSong.split("").forEach(char => {
    //         const charSpan = document.createElement("span")
    //         charSpan.innerText = char
    //         songDisplayElement.appendChild(charSpan)
    //     })
    //     songInputElement.value = null;
    // }

    updatePos() {
        if (this.pos["x"] > 65) {
            this.pos["x"] += (-5);
        }
    }

    // remove() {
        
    // }


    // to do:
        // make sure you keep track of what songs you already used (in its own arr) (make it in another class, game)
        // add a check for getRandomTitle() to see if it was used in arr ^
        // every level song arr reset
}

export default PotentialArmy;