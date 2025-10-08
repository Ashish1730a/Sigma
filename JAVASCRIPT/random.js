let btn=document.querySelector("button");
btn.addEventListener("click", function(){
    let h3=document.querySelector("h3");
    let randoColor=getRandomColor();
    h3.innerText=randoColor;

    let div=document.querySelector("div");
    div.style.backgroundColor=randoColor;
    console.log("color updated");
});
function getRandomColor(){
    let red =Math.floor(Math.random()*255);
    let green =Math.floor(Math.random()*255);
    let  blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;

}