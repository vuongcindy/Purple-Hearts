import Player from "./player.js";
import PotentialArmy from "./potential_army.js";
// import Player from "./Player";
class Game {
    constructor() {
        this.currentPotentialArmy = [];
        this.width = 100;
        this.height = 75;
        // this.addPotentialArmy();
        // this.objects = this.allObjects();
    }

    add() {
        this.currentPotentialArmy.push(new PotentialArmy({ pos: {x: 0, y: 0}}))
    };

    newPotentialArmy() {
        while (this.currentPotentialArmy.length < 4) {
            this.add();
        }
    }

    draw() {
        this.newPotentialArmy();
        for (let i = 0; i < this.currentPotentialArmy.length; i++) {
            this.currentPotentialArmy[i].randomStartPos();
            this.currentPotentialArmy[i].drawPA()
        }
    }

    remove(potentialArmy) {
        this.currentPotentialArmy.splice(this.currentPotentialArmy.indexOf(potentialArmy), 1);
    }

    removeFromBoard(potentialArmy) {
        if (potentialArmy.pos.x <= 65) {
            this.remove(potentialArmy)
        }
    }

    drawTimer(){
        return Math.floor(Math.random() * 4000) + 1000;
    }

    allObjects() {
        return [].concat(this.currentPotentialArmy, this.collisionPoints);
    };

    checkCollisions() {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length; i++) {
          for (let j = 0; j < allObjects.length; j++) {
            const obj1 = allObjects[i];
            const obj2 = allObjects[j];
      
            if (obj1.isCollidedWith(obj2)) {
              const collision = obj1.collideWith(obj2);
              if (collision) return;
            }
          }
        }
    };
    
    // startTimer() {
    // timerElement.innerText = 0
    // startTime = new Date()
    // setInterval(() => {
    //     timer.innerText = getTimerTime()
    // }, 1000)
    // }

    // getTimerTime() {
    // return Math.floor((new Date() - startTime) / 1000)
    // }

   
}

export default Game;
