const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user2 = new User({
  name: "Chaman",
  email: "Chaman@csnjdh.com",
  age: 67,
});

// User.findOneAndUpdate({ name: "Raju"}, { age: 88 }, {new: true})
//   .then((res) => {
//     console.log(res);
//   })
User.deleteOne({ name: "Raju"})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.findById("68cbfe72d872e2b25c47e101")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("There is some error");
//   });

// User.insertMany([
//   { name: "Raju", email: "raju@gmail.com", age: 54 },
//   { name: "Rani", email: "raju@gmail.com", age: 18 },
//   { name: "Tinku", email: "tinku@gmail.com", age: 21 },
// ]).then((res) => {
//   console.log(res);
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
