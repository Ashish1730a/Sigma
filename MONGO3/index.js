const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 =new Chat({
//     from: "Neha",
//     to: "Ashish",
//     message: "Hello !!! Ashish",
//     created_at: new Date()
// })

// index route
app.get("/chats", async (req, res) => {
  try{
      // Find all chat documents from MongoDB
  let chats = await Chat.find();
  // Print chats in console (for debugging)
  console.log(chats);
  // Send response to browser
  res.render("index.ejs", { chats });
  } catch(err){
    next(err);
  }
});

// Root route
app.get("/", async (req, res) => {
    let chats = await Chat.find();
  // Send simple message to browser
  res.render("index.ejs", {chats});
});






//new route for creating a chat
app.get("/chats/new", (req, res) => {
  
  // throw new ExpressError(404, "Page not found");
  res.render("new.ejs");  
});

// create route to handle form submission
app.post("/chats",asyncWrap( async (req, res) => {

    let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });
  await newChat.save()
  res.redirect("/chats");
}));

function asyncWrap(fn){
  return function (req, res, next){
    fn(req, res, next).catch(err => next(err))
  }
}

// show route
app.get("/chats/:id", asyncWrap(async (req, res , next) => {
    let { id } = req.params;
  let chat = await Chat.findById(id);
  if(!chat) {
    throw new ExpressError(404, "Chat not found")
  }
  res.render("edit.ejs", {chat});
}))

// edit route to show edit in message
app.get("/chats/:id/edit",asyncWrap( async (req,res) => {
  
    let {id}=req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
  
    
}))

// update route to handle edit form submission
app.put("/chats/:id",asyncWrap( async (req,res) => {

    let {id}=req.params;
    let {message:newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {message: newMsg}, {new: true});
    console.log(updatedChat);
    res.redirect("/chats");
}))


// destroy route to delete a chat
app.delete("/chats/:id",asyncWrap( async (req,res) => {

      let {id} = req.params;
    let chatDeleted = await Chat.findByIdAndDelete(id);
    console.log(chatDeleted);
    res.redirect("/chats");

}))

app.use((err, req, res, next) => {
  console.log(err.name)
  next(err);
})


// Error handling middleware
app.use((err, req, res, next) => {
  let {status=500, message="Some error Occurred"} = err;
  res.status(status).send(message)
})


app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
