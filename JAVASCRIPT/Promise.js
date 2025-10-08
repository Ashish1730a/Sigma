function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed>4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

// let req=savetoDb("Ashish Thakur");
// req 
// .then((msg) => {
//     console.log("promise was resolved" ,msg);
    
// })
// .catch((err) =>{
//     console.log("promise was rejected ",err);
// });


// PROMISE CHANNING 

savetoDb("Ashish Thakur")
.then(() => {
    console.log("data1 saved");
    return savetoDb("Hello world");
})
.then(() => {
    console.log("data2 saved");
    return savetoDb("shradha");
})
.then(() => {
    console.log("data3 saved");
})
.catch((err) =>{
    console.log("promise was rejected ",err);
});