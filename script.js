
let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let lavel=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    lavel++;
    h2.innerText=`Level ${lavel}`;

    let randomInd=Math.floor(Math.random()*3);
    let randomColor=btns[randomInd];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomInd);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);

}

function checkAns(indx){
    //console.log("Current Level : " ,lavel);
    //let indx=lavel-1;
    if(userSeq[indx]===gameSeq[indx]){
        //console.log("same value"); 
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${lavel}</b> <br> Press any key to start.`;
        
        document.querySelector("body").style.backgroundColor="red";
        setInterval(function(){
        document.querySelector("body").style.backgroundColor="white";
       },300);

        reset();
    }
}
function btnPress(){
    //console.log("button was clicked");
    //console.log(this);
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    lavel=0;
    userSeq=[];
    gameSeq=[];
}