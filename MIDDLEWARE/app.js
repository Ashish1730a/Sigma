const express= require("express");
const app= express()
const ExpressError=require("./ExpressError")

//middleware -> response send
// app.use( (req,res,next) => {
    
//     console.log("Hi, I am middleware");
//     // res.send("middleware 1st finished");
//     next();
//     // console.log("This is after next()")
// });



// app.use((req,res,next) => {
    
//     console.log("Hi, I am 2nd middleware");
//     // res.send("middleware finished");
//     next();
// });


// app.use("/random", (req,res,next) => {
//     console.log("I am only for random");
//     next();
// })

app.use("/api", (req,res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "access denied!");
    
})



app.get("/api", (req,res) => {
    res.send("Data");

})




app.get("/", (req,res) =>{
    res.send("Hi, I am root")
})

app.get("/random", (req,res)=> {
    res.send("This is a random page")
})

app.get("/err", (req,res) => {
    rajaji=rajaji

})

app.use((err, req, res, next) => {
    let {status=500, message= "Something went wrong"} = err;
    res.status(status).send(message);
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403, "Access to admin is Forbidden")
})


// app.use((err, req, res, next) => {
//     console.log("----- ERROR 2 -----");
//     next(err);
// });

// logger 
// app.use((req,res,next) => {
//     req.time =Date.now() ;
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });



app.listen(8080, () => {
    console.log("server listening to port 8080")
})


