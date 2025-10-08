h1 = document.querySelector("h1");

function changeColor(className, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() *5 )+1;
      if (num > 3) {
        reject("promise rejected");
      }

      h1.className = className;
      console.log(`color changed to ${className}!`);
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 2000);
  await changeColor("orange", 2000);
  await changeColor("green", 2000);
  await changeColor("yellow", 2000);
  await changeColor("blue", 2000);
  let a = 5;
  console.log(a);
  console.log("new number = ", a + 3);
}

// changeColor("red",2000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",2000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green",2000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("yellow",2000);
// })
// .then(()=>{
//     console.log("yellow color was completed");
//     return changeColor("blue",2000);
// })
// .then(()=>{
//     console.log("blue color was completed");
// })

// changeColor("red", 2000, () => {
//   changeColor("orange", 2000, () => {
//     changeColor("green", 2000, () => {
//       changeColor("yellow", 2000, () => {
//         changeColor("blue", 2000);
//       });
//     });
//   });
// });
