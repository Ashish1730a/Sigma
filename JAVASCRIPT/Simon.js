let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");
document.addEventListener("keydown", function () {
  if (start == false) {
    console.log("game is stated");
    start = true;

    levelUp();
  }
});

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;
  

  let randIdx = Math.floor(Math.random()*4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);


//   console.log(randIdx);
//   console.log(randColor);
//   console.log(randbtn);
    gameSeq.push(randColor)
    console.log(gameSeq)
  gameFlash(randbtn);

}
  function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 300);
  
}
 function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
      btn.classList.remove("userflash");
    }, 100);
  
}
function checkAns(){
    console.log("curr level :", level)
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allBtns=document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click", btnPress);
}