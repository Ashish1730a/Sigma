const express = require("express");
const app = express();
const port=8080;
const path=require("path");
const {v4: uuidv4}=require('uuid');


app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts= [
    {
        id: uuidv4(),
        username : "Ashish",
        content : "I love coding"
    },
    {
        id: uuidv4(),
        username : "Atul",
        content : "Hardwork is key of success"
    },{
        id: uuidv4(),
        username : "cheeku",
        content : "I love biology"
    },
]
app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
     console.log("Requested id:", id);
     console.log("All posts:", posts);
    let post =posts.find((p) => id === p.id);
    
    
    res.render("show.ejs", {post});

});

app.patch("/posts/id", (req, res) => {
      let {id} = req.params;
      let newContent = req.body.content;
      console.log(newContent);
      console.log(id);
    res.send("patch request working")
})
app.listen(port, () => {
    console.log("listening to port : 8080")
});