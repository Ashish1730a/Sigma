const express = require("express");
const app = express();
const port =5050;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req,res)=>{
    res.send("standard GET response")
});
app.post("/register", (req,res)=>{
    console.log(req.body)
    res.send("standard POST response")
});
app.listen(port , () => {
    console.log(`listening to port ${port}`);
})