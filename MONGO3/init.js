const mongoose = require("mongoose");
const Chat = require("./models/chat");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");

    await Chat.insertMany(allChats);
    console.log("Data inserted!");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

const allChats = [
  {
    from: "Neha",
    to: "Ashish",
    message: "Hello Ashish!",
    created_at: new Date(),
  },
  {
    from: "Ashish",
    to: "Neha",
    message: "Hi Neha! How are you?",
    created_at: new Date(),
  },
  {
    from: "Neha",
    to: "Ashish",
    message: "I'm good, thanks!",
    created_at: new Date(),
  },
  {
    from: "Ravi",
    to: "Neha",
    message: "Hey Neha, are you coming to the party?",
    created_at: new Date(),
  },
];

main();





