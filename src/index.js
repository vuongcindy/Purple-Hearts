import Player from "./scripts/player.js";
import Enemy from "./scripts/enemy.js";
import Game from "./scripts/game.js";

window.Player = Player;
window.Enemy = Enemy;
window.Game = Game;

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 1200;
    canvas.height = 600;

    const startButton = document.getElementById('start-button');
    const popup = document.getElementById('popup');
    const instructions = document.getElementById('instructions')
    
    startButton.addEventListener('click', () => {
        popup.style.display = 'none'
        instructions.style.display = 'none'

        window.location.reload();
        
        const player = new Player({
            pos: {
                x: 35,
                y: 235
            }
        })

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
    
        const newGame = new Game();
        newGame.newPotentialArmy();
    
        function animate() {
            window.requestAnimationFrame(animate)
            
            ctx.fillStyle = "white";
            ctx.fillRect(25, 25, canvas.width, canvas.height)
    
            ctx.font = '25px Arial' // anchored text
            ctx.strokeStyle = "purple" // lanes
    
            // player lane
            ctx.beginPath();
            ctx.moveTo(77, 77);
            ctx.lineTo(77, 455);
            ctx.stroke();
            
            // lane 1
            ctx.beginPath();
            ctx.moveTo(77, 77);
            ctx.lineTo(1110, 77);
            ctx.stroke();
            
            // lane 2
            ctx.beginPath();
            ctx.moveTo(77, 267);
            ctx.lineTo(1110, 270);
            ctx.stroke();
            
            // lane 3
            ctx.beginPath();
            ctx.moveTo(77, 455);
            ctx.lineTo(1110, 455);
            ctx.stroke();
            
            newGame.currentEnemy.forEach(pa => {
                pa.drawPA();
                pa.updatePos();
                if (pa.pos.x <= 35) {
                    newGame.remove(pa)
                }
            })
    
            let playerPos = testplayer.pos.y
            let PAInPlayerRow = null;
    
            for (let i = 0; i < newGame.currentEnemy.length - 1; i++) {
    
                let currentPA = newGame.currentEnemy[i]
                if (currentPA.pos.y === playerPos) {
                    PAInPlayerRow = currentPA
                }
            };
            var textInputText = document.getElementById('textInput').value;
    
            // If we match the cat in the row
            if (PAInPlayerRow !== null && textInputText === PAInPlayerRow.currentSong) {
                document.getElementById('textInput').value = '';
                newGame.increaseScore(PAInPlayerRow);
                PAInPlayerRow.clear()
                newGame.remove(PAInPlayerRow);
                newGame.increaseLevel()
            } 
            // else if (PAInPlayerRow !== null && songInputText === PAInPlayerRow.currentSong) {
            //     newGame.decreaseScore(PAInPlayerRow);
            //     newGame.decreaseLevel();
            // }
    
            testplayer.draw();
        }
        // document.getElementById('music').play();
        animate();
    })

    
});