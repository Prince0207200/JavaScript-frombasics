
const sym="key";
const Obj1={
    name: "prince",
    "age": 32,
    [sym]: "symbol"
};
// console.log(Obj1.age);

// console.log(Obj1["name"]);
// console.log(Obj1.sym);

// console.log(Obj1[sym]);
// //to change
// Obj1.age=21;
// console.log(Obj1);
// //change will frreze no change apply
// Object.freeze(Obj1);
// Obj1.age=1;
// console.log(Obj1);



Obj1.greeting=function(){
    console.log(`Hello ${this.name}`);

};
Obj1.greeting();
const fun1=function(){
    console.log("Func1 is called");

}
fun1();