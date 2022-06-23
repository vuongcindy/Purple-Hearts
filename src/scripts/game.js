// import Player from "./player.js";
import Heart from "./heart.js";
import PotentialArmy from "./potential_army.js";
class Game {
    constructor() {
        this.currentPotentialArmy = [];
        this.hearts = [];
        this.width = 100;
        this.height = 75;
        // this.objects = this.allObjects();
        // this.generatePATime = Date.now() // time in ms
    }

    // add(obj) {
    //     if (obj instanceof PotentialArmy) {
    //         this.currentPotentialArmy.push(new PotentialArmy({ pos: {x: 0, y: 0}}))
    //     } else if (obj instanceof Heart) {
    //         this.hearts.push(new Heart())
    //     } else {
    //         throw new Error("Unknown type of obj")
    //     }
    // };

    // addPotentialArmy() {
    //     this.currentPotentialArmy.push(new PotentialArmy({ pos: {x: 0, y: 0}}))
    // };

    newPotentialArmy() {
        let t = this.delayTimer();

        if(this.currentPotentialArmy.length < 4) {
            let newPotentialArmy = new PotentialArmy( {pos: {x: 0, y: 0}});
            newPotentialArmy.randomStartPos()
            this.currentPotentialArmy.push(newPotentialArmy);
            setTimeout(() => {
                this.newPotentialArmy()
            }, t)
        }
    }

    // generateNextCatTime() {
    //     this.generateCatTime = Date.now() + this.delayTimer();
    // }

    start() {
        this.newPotentialArmy();
        for (let i = 0; i < this.currentPotentialArmy.length; i++) {
            this.currentPotentialArmy[i].randomStartPos();
        }
    }

    remove(potentialArmy) {
        this.currentPotentialArmy.splice(this.currentPotentialArmy.indexOf(potentialArmy), 1);
    }

    // 1 - 4 secs in ms
    delayTimer(){
        return Math.floor(Math.random() * 4000) + 1000;
    }

    // allObjects() {
    //     return [].concat(this.currentPotentialArmy, this.hearts);
    // };

    // checkCollisions() {
    //     const allObjects = this.allObjects();
    //     for (let i = 0; i < allObjects.length; i++) {
    //       for (let j = 0; j < allObjects.length; j++) {
    //         const obj1 = allObjects[i];
    //         const obj2 = allObjects[j];
      
    //         if (obj1.isCollidedWith(obj2)) {
    //           const collision = obj1.collideWith(obj2);
    //           if (collision) return;
    //         }
    //       }
    //     }
    // };   
}

export default Game;