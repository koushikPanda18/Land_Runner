const runnerContainer=document.querySelector(".runner");
const blockContainer=document.querySelector(".block");
const gameOver=document.querySelector(".gameover");
const birdContainer=document.querySelector(".bird");
const btnContainer=document.querySelector(".btn");
const playButton=document.querySelector(".playButton");
const playContainer=document.querySelector(".play");
const gobackButton=document.querySelector(".btn2");
const score=document.querySelector('.yourScore');


//initialize values----
let counter;
function initialize(){
    counter=0;
    console.log("hi threr");
    blockContainer.classList.add("blockactive");
    runnerContainer.style.bottom=0;
    gobackButton.classList.remove("active");
    birdContainer.style.right=0;
    birdContainer.classList.add("birdActivate");
    gameOver.classList.remove("active");
    console.log("hello threr");
    btnContainer.classList.remove("active");
}
blockContainer.classList.add("blockactive");
birdContainer.classList.add("birdActivate");
btnContainer.classList.remove("active");


function jump(){
    if(!runnerContainer.classList.contains("animate")){
        runnerContainer.classList.add('animate');
    }
    setTimeout(function(){
        runnerContainer.classList.remove('animate');
    },500)
}

blockContainer.addEventListener('animationiteration',()=>{
    counter++;
    score.innerText=counter;
})


var checkGameOver=setInterval(function(){
    var birdPosition=window.getComputedStyle(birdContainer).getPropertyValue("right")
    var blockleftt=window.getComputedStyle(blockContainer).getPropertyValue("right");
    var runnerbottomm=window.getComputedStyle(runnerContainer).getPropertyValue("bottom");
    var runnerBottom=parseInt(window.getComputedStyle(runnerContainer).getPropertyValue("bottom"));
    var blockleft=parseInt(window.getComputedStyle(blockContainer).getPropertyValue("left"));
    if(runnerBottom<40 && blockleft>50 && blockleft<90){
        // blockContainer.style.amimation="none";
        // blockContainer.classList.remove("blockactive");
        gameOver.classList.add("active");
        blockContainer.classList.remove("blockactive");



        // blockContainer.style.display="block";
        blockContainer.style.right=blockleftt;
        runnerContainer.classList.remove('animate');
        runnerContainer.style.bottom=runnerbottomm;
        birdContainer.classList.remove("birdActivate");
        birdContainer.style.right=birdPosition;
        
        btnContainer.classList.add("active");
        gobackButton.classList.add("active");
        
        // blockContainer.style.position="fixed";
        // alert("loose");
    }
    
},10)




btnContainer.addEventListener('click',()=>{
    score.innerText=0;
    blockContainer.style.right=0;
    initialize();
})


playButton.addEventListener('click',()=>{
    playContainer.classList.add("playactive");
})


gobackButton.addEventListener('click',()=>{
    playContainer.classList.remove("playactive");
})