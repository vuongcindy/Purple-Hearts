import Enemy from "./enemy.js";
class Game {
    constructor() {
        this.currentEnemy = [];
        this.hearts = [];
        this.width = 100;
        this.height = 75;
        this.score = 0;
        // this.objects = this.allObjects();
    }

    // add(obj) {
    //     if (obj instanceof Enemy) {
    //         this.currentEnemy.push(new Enemy({ pos: {x: 0, y: 0}}))
    //     } else if (obj instanceof Heart) {
    //         this.hearts.push(new Heart())
    //     } else {
    //         throw new Error("Unknown type of obj")
    //     }
    // };

    newPotentialArmy() {
        let t = this.delayTimer();

        if(this.currentEnemy.length < 15) {
            let newPotentialArmy = new Enemy( {pos: {x: 0, y: 0}} );
            newPotentialArmy.randomStartPos()
            this.currentEnemy.push(newPotentialArmy);
            setTimeout(() => {
                this.newPotentialArmy()
            }, t)
        }
    }

    increaseScore(PAInPlayerRow) {
        var score = parseInt(document.getElementById("current_score").innerHTML)  
        var currentLvlScore = parseInt(document.getElementById('current_level_score').innerHTML) 

        if (score === 0) {
            score = PAInPlayerRow.currentSong.length;
            currentLvlScore = PAInPlayerRow.currentSong.length;
        } else {
            score = score + PAInPlayerRow.currentSong.length;
            currentLvlScore = currentLvlScore + PAInPlayerRow.currentSong.length;
        }

        document.getElementById("current_score").innerHTML = score;
        document.getElementById("current_level_score").innerHTML = currentLvlScore;
    }

    increaseLevel() {
        var level = parseInt(document.getElementById('current_level').innerHTML)
        var currentLvlScore = parseInt(document.getElementById('current_level_score').innerHTML)

        if(currentLvlScore / 10 > 1) {
            document.getElementById('current_level').innerHTML = level + 1
            document.getElementById('current_level_score').innerHTML = 0
        } 
    }

    // decreaseScore(PAInPlayerRow) {
    //     var score = parseInt(document.getElementById("current_score").innerHTML)  
    //     var currentLvlScore = parseInt(document.getElementById('current_level_score').innerHTML) 

    //     if (score !== 0) {
    //         score = score - PAInPlayerRow.currentSong.length;
    //         currentLvlScore = currentLvlScore - PAInPlayerRow.currentSong.length;
    //     }

    //     document.getElementById("current_score").innerHTML = score;
    //     document.getElementById("current_level_score").innerHTML = currentLvlScore;
    // }

    // decreaseLevel() {
    //     var level = parseInt(document.getElementById('current_level').innerHTML)
    //     var score = parseInt(document.getElementById('current_score').innerHTML)
    //     var currentLvlScore = parseInt(document.getElementById('current_level_score').innerHTML)

    //     if(currentLvlScore / 10 > 1) {
    //         document.getElementById('current_level').innerHTML = level - 1
    //         document.getElementById('current_level_score').innerHTML = 0
    //     } 
    // }

    remove(enemy) {
        this.currentEnemy.splice(this.currentEnemy.indexOf(enemy), 1);
    }

    // 1 - 4 secs in ms
    delayTimer(){
        return Math.floor(Math.random() * 3000) + 1000;
    }

    // allObjects() {
    //     return [].concat(this.currentEnemy, this.hearts);
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