let btns = document.querySelectorAll("button");
for(btn of btns){
//    btn.addEventListener("click", sayHello);
//    btn.addEventListener("click", sayName);
btn.addEventListener("dblclick", function() {
    console.log("you double click me");
});
}

// btn.onclick=function () {
//     alert("button was clicked");
// }

function sayHello(){
    alert("Hello!!!!!!!");
}
function sayName(){
    alert("Apna college");
}

// btn.onclick=sayHello;