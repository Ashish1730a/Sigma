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

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("Pre middleware");
// })

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length) {
        let res= await Order.deleteMany({ _id: {$in: customer.orders}})
        console.log(res);
    }
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema)

const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

// findCustomer();

const addCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun",

    })
    let newOrder = new Order({
        item: "Burger",
        price: 250
    })

    newCust.orders.push(newOrder)
    await newOrder.save();
    await newCust.save();

    console.log("Added new customer")
}
// addCust()

const deltCust = async () => {
    let id = '68ea2ec7e16ad8dbb5550006';
    let data = await Customer.findByIdAndDelete(id)
    console.log(data);

}
deltCust();

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


