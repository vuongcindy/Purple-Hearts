// import Player from "./player.js";
import PotentialArmy from "./potential_army.js";
class Game {
    constructor() {
        this.currentPotentialArmy = [];
        this.width = 100;
        this.height = 75;
        // this.objects = this.allObjects();
        // this.generatePATime = Date.now() // time in ms
    }

    addPotentialArmy() {
        this.currentPotentialArmy.push(new PotentialArmy({ pos: {x: 0, y: 0}}))
    };

    newPotentialArmy() {
        var t = 200;
        let that = this;
        addEnemy(that);
        function addEnemy(that) {
            console.log(that.currentPotentialArmy)
            that.currentPotentialArmy.push(new PotentialArmy({ pos: {x: 0, y: 0}}));
            t = that.delayTimer();
            if (that.currentPotentialArmy.length <= 3) {
                setTimeout(addEnemy(that), 5000)
            }
        }
        // while (this.currentPotentialArmy.length < 4) {
        //     this.currentPotentialArmy.push(new PotentialArmy({ pos: {x: 0, y: 0}}));
        // }
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
    //     return [].concat(this.currentPotentialArmy, this.collisionPoints);
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