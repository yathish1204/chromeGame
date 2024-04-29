score = 0;
var cross = true;
let gameOverM = new Audio("gameover123.mp3");
let bgMusic= new Audio ("music.mp3");
setTimeout(()=>{
    bgMusic.play();
},1000)
document.onkeydown = function(e){
    console.log("Key  code is : " , e.keyCode);
    if(e.keyCode===38||e.keyCode===87){
     let dino = document.querySelector(".dino");   
     dino.classList.add('animateDino');
     setTimeout(()=>{
        dino.classList.remove("animateDino");
     },600)
    }
    else if(e.keyCode===39){
        let dino = document.querySelector(".dino");   
        dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
       }
    else if(e.keyCode===37){
        let dino = document.querySelector(".dino");   
        dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
       }
}


setInterval(()=>{
    dino = document.querySelector(".dino");
    gameOver=document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX,offsetY);
    if(offsetX<73 && offsetY<52){
        // gameOver.innerHTML="GameOver";  
        gameOver.style.visibility = "visible";
        gameOverM.play();
        bgMusic.pause();
        obstacle.classList.remove("obstacleAni");
    }
    else if(offsetX<145 && cross){
        score += 1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },200);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            console.log(newDur);
            obstacle.style.animationDuration = newDur + "s";
        },1000)
    }
},100);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}
