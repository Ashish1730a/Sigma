// Constructors - doesn't return anything & start with capital
// function Person(name, age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }
// Person.prototype.talk =function () {
//     console.log(`hi, my name is ${this.name}`);
// };

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    talk(){
        console.log(`hi, my name is ${this.name}`)
    }
}
let p1 = new Person("adam", 25);
let p2 = new Person("eve", 20);
