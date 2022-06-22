import Player from "./scripts/player.js";
import PotentialArmy from "./scripts/potential_army.js"
import Game from "./scripts/game.js"
// import GameView from "./scripts/game_view.js"

window.Player = Player;
window.PotentialArmy = PotentialArmy;
window.Game = Game;
// window.GameView = GameView;

document.addEventListener('DOMContentLoaded', () => {
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
    newGame.draw()

    function animate() {
        window.requestAnimationFrame(animate)
        
        ctx.fillStyle = "white";
        ctx.fillRect(25, 25, canvas.width, canvas.height)

        // collision points
        // ctx.fillStyle = "";
        // ctx.fillRect(35, 45, 100, 300);
        // ctx.fillRect(35, 235, 85, 65);
        // ctx.fillRect(35, 420, 85, 65);
        
        // potential enemy starting positions
        ctx.strokeStyle = "red"

        // anchored text starting location
        ctx.font = '16px Arial'
        ctx.fillText('Text1', 790, 110);
        ctx.fillText('Text2', 790, 300);
        ctx.fillText('Text3', 790, 490);
        
        // ctx.fillRect(75, 75, 5, 380);
        ctx.beginPath();
        ctx.moveTo(77, 77);
        ctx.lineTo(77, 455);
        ctx.stroke();
        
        // enemy movement
        ctx.fillStyle = "red"
        
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
        
        let playerPos = testplayer.pos.y
        let current_in_row;

        for (let i = 0; i < newGame.currentPotentialArmy.length - 1; i++) {
            let current_cat = newGame.currentPotentialArmy[i]

            setTimeout(current_cat.drawPA(), newGame.drawTimer())
            
            setTimeout(current_cat.updatePos(), newGame.drawTimer())
            
            // newGame.currentPotentialArmy[i].removeFromBoard(currentPotentialArmy[i]);
            // newGame.currentPotentialArmy[i].newPotentialArmy()

            
            if (current_cat.pos.y === playerPos) {
                current_in_row = current_cat
            }
            
            
        };
        var songInputText = document.getElementById('songInput').value;
        if (songInputText === current_in_row.currentSong) {
        //     // document.getElementById('songInput').value = '';
            console.log("poof")
        //     // make cat disappear
        }


        testplayer.draw();
        
    }
    
    animate();
});