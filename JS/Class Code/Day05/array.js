// const { combine } = require("zustand/middleware");

// const carriage1 = ["veer","ayush","Ravi"];

// const emptycarriage = [];


// const threeEmptySeats =  Array(3);
// console.log(threeEmptySeats.length);

// const SinglePassenger   = Array.of(3);

// console.log(SinglePassenger);

// console.log(SinglePassenger.length)

// const trainCode = Array.from("Dust ");

// console.log(trainCode);

// const tempTrai = ["A","b","c","D"];
// tempTrai.length = 3;
// console.log(tempTrai);

// tempTrai.length =  5;
// console.log(tempTrai);


// const fruits = ["apple","banana"]
// fruits.push("Orange");

// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.shift()
// console.log(fruits);


// fruits.unshift("orange");

// console.log(fruits);

// let arr = [10, 20, 30, 40, 50];

// arr.splice(2,2);
// console.log(arr);


// arr.splice(2,0,50);
// console.log(arr);


// arr.splice(1,2,200,220);
// console.log(arr);


// // const trainCopy  =  wholeTrain.slice();

// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const array3 = [7,788,8];


// const mergedArray = array1.concat(array2);
// const mergedArray2 =  array1.concat(array2,array3)
// const mergedArray3 = array1.concat(5,4,9);
// console.log(mergedArray3)
// console.log(mergedArray);

// console.log(mergedArray2);

// const animals = ["dog","cat","tiger"];
// console.log(animals.slice(2)); 


// const array4 = [1,[2,[3,[4,50]]]];

// console.log(array4.flat());

// console.log(array4.flat(Infinity));


// const array5 = [1,2,3, 4];
// console.log(array5.flatMap((x)=>[x*2]));


// console.log(array5.indexOf(4));

// console.log(array5.indexOf(40));

// console.log(typeof([]));

// console.log(array5.includes(5));
// console.log(array5.includes(1));


// console.log(Array.isArray([1,"nik","afd"]));



 const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];





const myData = orders.forEach((order,index)=>{
    console.log(`${index+1}:${order.qty}x :${order.dish}`)
});




const recipet_lines = orders.map(o =>` ${o.dish}:${o.price * o.qty}`);;
console.log(recipet_lines);


const spicy=  orders.filter((o)=> o.spicy);
console.log(spicy);

const totalRevenue = orders.reduce((sum,order  )=> {


    return sum+(order.qty * order.price);
    
}, 0)
console.log(totalRevenue); 




const grouped = orders.reduce((acc,order)=>{

    const category = order.spicy ? "spicy" :"mild";

    acc[category].push(order.dish);

    return acc;

},{spicy:[],mild:[]})


const ticketNumber = [100,25,3,42,8];


const sortedW = [...ticketNumber].sort((a,b)=>a-b);


console.log(sortedW);

const kitchenOrders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
  { dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1 },
];

const mildreport = kitchenOrders
    .filter(order =>  !order.spicy)
    .map(order =>({
        dish:order.dish,
        total:order.price  * order.qty
    }))
    .toSorted((a,b)=>a.total-b.total)
