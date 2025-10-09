const mongoose = require("mongoose");
const { insertMany } = require("../../../MONGO3/models/chat");
const {Schema} = mongoose;






main().then( () => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

orderSchema = new Schema({
    item: String,
    price: Number,
});



const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
})


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema)

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

findCustomer();

// const addOrders = async () => {
//     let res =await Order.insertMany([
//         {item: "Somosa", price: 8},
//         {item: "Chips", price: 25},
//         {item: "Choclate", price: 15},
//         {item: "Tikki", price: 30},
//     ]);
//     console.log(res);
// }

// addOrders();
