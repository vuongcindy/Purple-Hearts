import Player from "./scripts/player.js";
import PotentialArmy from "./scripts/potential_army.js"

window.Player = Player;
window.PotentialArmy = PotentialArmy;


window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 600;

    document.onkeyup = function(e) {
        switch(e.key) {
            case "ArrowUp": 
            if (testplayer.pos.y === 255) {
                testplayer.pos.y = 65
            } else if (testplayer.pos.y === 433) {
                testplayer.pos.y = 255
            }
            break;
            
            case "ArrowDown": 
            if (testplayer.pos.y === 65) {
                testplayer.pos.y = 255
            } else if (testplayer.pos.y === 255) {
                testplayer.pos.y = 433
            }
            break;
            
            default: return;
        }
    }

    const testplayer = new Player({
        pos: {
            x: 65,
            y: 255
        }
    })

    const cat1 = new PotentialArmy({
        pos: {
            x: 798,
            y: 65
        }
    })

    const cat2 = new PotentialArmy({
        pos: {
            x: 798,
            y: 257
        }
    })

    const cat3 = new PotentialArmy({
        pos: {
            x: 798,
            y: 443
        }
    })

    function animate() {
        window.requestAnimationFrame(animate)
        
        ctx.fillStyle = "white";
        ctx.fillRect(25, 25, canvas.width, canvas.height)
        
        // potential enemy starting positions
        ctx.strokeStyle = "red"
        // ctx.strokeRect(798, 65, 25, 25);
        // ctx.strokeRect(798, 257, 25, 25);
        // ctx.strokeRect(798, 443, 25, 25);
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

        testplayer.draw();
        cat1.draw();
        cat2.draw();
        cat3.draw();
    }
    animate();
});
