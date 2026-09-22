const { combine } = require("zustand/middleware");

const carriage1 = ["veer","ayush","Ravi"];

const emptycarriage = [];


const threeEmptySeats =  Array(3);
console.log(threeEmptySeats.length);

const SinglePassenger   = Array.of(3);

console.log(SinglePassenger);

console.log(SinglePassenger.length)

const trainCode = Array.from("Dust ");

console.log(trainCode);

const tempTrai = ["A","b","c","D"];
tempTrai.length = 3;
console.log(tempTrai);

tempTrai.length =  5;
console.log(tempTrai);


const fruits = ["apple","banana"]
fruits.push("Orange");

console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift()
console.log(fruits);


fruits.unshift("orange");

console.log(fruits);

let arr = [10, 20, 30, 40, 50];

arr.splice(2,2);
console.log(arr);


arr.splice(2,0,50);
console.log(arr);


arr.splice(1,2,200,220);
console.log(arr);


// const trainCopy  =  wholeTrain.slice();

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,788,8];


const mergedArray = array1.concat(array2);
const mergedArray2 =  array1.concat(array2,array3)
const mergedArray3 = array1.concat(5,4,9);
console.log(mergedArray3)
console.log(mergedArray);

console.log(mergedArray2);

const animals = ["dog","cat","tiger"];
console.log(animals.slice(2)); 


const array4 = [1,[2,[3,[4,50]]]];

console.log(array4.flat());

console.log(array4.flat(Infinity));


const array5 = [1,2,3, 4];
console.log(array5.flatMap((x)=>[x*2]));


console.log(array5.indexOf(4));

console.log(array5.indexOf(40));

console.log(typeof([]));

console.log(array5.includes(5));
console.log(array5.includes(1));


console.log(Array.isArray([1,"nik","afd"]));