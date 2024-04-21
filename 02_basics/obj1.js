
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



// Obj1.greeting=function(){
//     console.log(`Hello ${this.name}`);

// };
// Obj1.greeting();
// const fun1=function(){
//     console.log("Func1 is called");

// }
// fun1();


const Object1={
    a: "alpha",
    b: "beta"
};
const Object2={
    c: "cat",
    d: "Dog"
};

// const Object3=Object.assign(Object1,Object2,Obj1);
// console.log(Object3===Object1);


// const Object3={...Obj1, ...Object1, ...Object2};
// console.log(Object3===Obj1)


const user=[
    {
        id: 1,
        email: "dfg"
    },
    {
        id: 1,
        email: "dfg"
    },
    {
        id: 1,
        email: "dfg"
    }
]
console.log(user[2].id);
// console.log(Object.keys(Object1));
console.log(Object.values(Object1));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("0"));