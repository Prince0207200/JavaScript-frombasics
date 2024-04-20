const num=new Number(67657.23456);
console.log(num);
console.log(num.toString());
console.log(num.toString().length);
console.log(num.toString().charAt(2));
//for precision toFixed
console.log(num.toFixed(3));
console.log(num.toPrecision(2));
console.log(num.toPrecision(6));

const anotherNum=new Number(100000000);
console.log(anotherNum.toLocaleString());
console.log(anotherNum.toLocaleString("en-IN"));