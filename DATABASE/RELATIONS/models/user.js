const mongoose = require("mongoose");
const {Schema} = mongoose;






main().then( () => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,

        },
    ],
})

const user = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new user({
        username: "Ashish",
        addresses: [{
            location: "Nanital",
            city: "Delhi",
        }]
    });
    user1.addresses.push({
        location: "pant nagar",
        city: "rajsthan",
    })
    user1.addresses.push({
        location: "navi mumbai",
        city: "pune",
    })
    let res=await user1.save();
    console.log(res);
}

addUsers();
