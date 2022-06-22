import Player from "./scripts/player.js";
import PotentialArmy from "./scripts/potential_army.js"
import Game from "./scripts/game.js"

window.Player = Player;
window.PotentialArmy = PotentialArmy;
window.Game = Game;

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 600;

    document.onkeyup = function(e) {
        switch(e.key) {
            case "ArrowUp": 
            if (testplayer.pos.y === 235) {
                testplayer.pos.y = 35
            } else if (testplayer.pos.y === 420) {
                testplayer.pos.y = 235
            }
            break;
            
            case "ArrowDown": 
            if (testplayer.pos.y === 35) {
                testplayer.pos.y = 235
            } else if (testplayer.pos.y === 235) {
                testplayer.pos.y = 420
            }
            break;
            
            default: return;
        }
    }

    const testplayer = new Player({
        pos: {
            x: 35,
            y: 235
        }
    })

    const newGame = new Game();
    newGame.start()
    // newGame.newPotentialArmy();



    function animate() {
        window.requestAnimationFrame(animate)
        
        ctx.fillStyle = "white";
        ctx.fillRect(25, 25, canvas.width, canvas.height)

        // anchored text starting location
        ctx.font = '20px Arial'
        ctx.fillText('Text1', 790, 110);
        ctx.fillText('Text2', 790, 300);
        ctx.fillText('Text3', 790, 490);
        
        let playerPos = testplayer.pos.y
        let inPARow = null;

        // if (Date.now > newGame.generatePATime()) {
        //     newGame.addPotentialArmy();
        //     newGame.generatePATime;
        // }
        // console.log(newGame.currentPotentialArmy)
        newGame.currentPotentialArmy.forEach(pa => {
            pa.drawPA();
            pa.updatePos();
            if (pa.pos.x <= 35) {
                newGame.remove(pa)
            }
        })
        for (let i = 0; i < newGame.currentPotentialArmy.length - 1; i++) {
        //     // (function(i) {
        //     //     setTimeout(function() {
        //     //         currentPA.drawPA();
        //     //     }, 5000)
        //     // })(i);
            let currentPA = newGame.currentPotentialArmy[i]
            
        //     // setTimeout(() => { currentPA.updatePos() }, 50000)

        //     // console.log(currentPA.pos.y, playerPos)

            if (currentPA.pos.y === playerPos) {
                // console.log(currentPA.pos.y, playerPos, "is equal")
                inPARow = currentPA
            // } else {
            //     // console.log(currentPA.pos.y, playerPos, "is NOT equal")
            }
            
            
        };
        var songInputText = document.getElementById('songInput').value;
        // if (inPARow !== null && currentPA.processInputText() === currentPA.inPARow.updateSong()) {
        if (inPARow !== null && songInputText === inPARow.currentSong) {
            document.getElementById('songInput').value = '';
            inPARow.clear()
            newGame.remove(inPARow)
            // newGame.addPotentialArmy()
        }

        ctx.strokeStyle = "purple" // lanes

        ctx.beginPath();
        ctx.moveTo(77, 77);
        ctx.lineTo(77, 455);
        ctx.stroke();
        
        // lane 1
        ctx.beginPath();
        ctx.moveTo(77, 77);
        ctx.lineTo(810, 77);
        ctx.stroke();
        
        // lane 2
        ctx.beginPath();
        ctx.moveTo(77, 267);
        ctx.lineTo(810, 270);
        ctx.stroke();
        
        // lane 3
        ctx.beginPath();
        ctx.moveTo(77, 455);
        ctx.lineTo(810, 455);
        ctx.stroke();

        testplayer.draw();
    }
    
    animate();
});