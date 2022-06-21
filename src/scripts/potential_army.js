class PotentialArmy {
    constructor({ pos, color = "#E9967A" }) {
        this.pos = pos;
        this.color = color;
        this.width = 100;
        this.height = 75;
        this.songs = ["nj","ks","my","jh","pj","kt","jj"]
    }

    draw() {
        const canvas = document.getElementById("game-canvas");
        const ctx = canvas.getContext("2d");
        let cat1Img = document.getElementById("cat_1")
        ctx.drawImage(cat1Img, this.pos.x, this.pos.y, this.width, this.height);
    }
}



export default PotentialArmy;