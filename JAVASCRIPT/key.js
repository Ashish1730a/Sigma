// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log("key was pressed");
// })

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })


// let form=document.querySelector("form");
// form.addEventListener("submit",function(){
//     alert("form submitted");
// })

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value}, your passowrd is set to ${pass.value}`);
});

