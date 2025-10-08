const {faker} = require('@faker-js/faker');
const mysql = require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'ashish'
});

let  getRandomUser = () => {
  return [
  faker.string.uuid(),
  faker.internet.username(),
  faker.internet.email(),
  faker.internet.password(),
  ];
};

// inserting new data
// let q="insert into user (id, username, email, password) values ?";
// // let users = [["123b","123_newuserb", "abc@gmail.comb", "abcb"],
// // ["123c","123_newuserc", "abc@gmail.comc", "abcc"]];


// let data=[];
// for(let i=1;i<=100; i++) {
//   data.push(getRandomUser());
// }


// home route
app.get("/", (req, res) => {
  let q=`select count(*) from user`;
try{
        connection.query(q, (err, result) => {
        if(err) throw err;
        let count = result[0]["count(*)"];
        // console.log(result.length);
        // console.log(result[0]);
        // console.log(result[1]);
          res.render("home.ejs",{count});
    });
} catch(err) {
    console.log(err);
    res.send("some error in database")
  }
});

// show route
app.get("/user", (req, res) => {
let q=`select * from user`;
try{
        connection.query(q, (err,users) => {
        if(err) throw err;
        // console.log(result);
        // res.send(result);
        res.render("users.ejs", {users})
    });
} catch(err) {
    console.log(err);
    res.send("some error in database")
  }
});

// edit route
app.get("/user/:id/edit", (req, res) => {
  let {id} =req.params;
  let q=`Select * from user where id='${id}'`;


  try{
        connection.query(q, (err,result) => {
        if(err) throw err;
        let user = result[0]
        res.render("edit.ejs", {user})
    });
} catch(err) {
    console.log(err);
    res.send("some error in database")
  }

});


// update (DB) route
app.patch("/user/:id", (req, res) => {
  let {id} =req.params;
  let {password: formPass,username: newUsername} = req.body;
  let q=`Select * from user where id='${id}'`;


  try{
        connection.query(q, (err,result) => {
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password) {
          res.send("wrong password")
        } else {
            let q2 =`update user set username='${newUsername}' where id='${id}'`;
            connection.query(q2, (err, result) => {
              if(err) throw err;
              res.redirect("/user");
            })
        }
    });
} catch(err) {
    console.log(err);
    res.send("some error in database")
  }
})

app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});
// console.log(getRandomUser());


// connection.end();