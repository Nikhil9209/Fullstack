// let age =  24;
// console.log(age)
// age =45;
// console.log(age);

// const age = 334;
// age = 45;

// will throw an error because once a variable is declared as const it cant be assigned with a new value ;


// function Nikhil(x,y,z){
//     console.log(`${x} and ${y} and ${z}`);
// }

// Nikhil("nik","hi","l")

// function add(num1,num2){
//     const result = num1+num2;
//     return result ;
// }


// const r =  add(2,5);
// console.log(r);



// function cartoon(){

//     function cartoonInsideCartoon(){

//         return 'Naruto';
//     }
//     return cartoonInsideCartoon; //  It is returning a fucntion .. and 

// }

// const anime = cartoon();
// const ri = anime ();
// console.log(ri);


// age = 45;

// console.log('Value  of age is ', age, 'Is allowed', isAlllowedToVote(age));
// var age   =  24;

// function isAllowedToVote(age){
//     return age>=18;
// }


// age = 45;

// console.log('Value  of age is ', age, 'Is allowed', isAlllowedToVote(age));
// var age   =  24;

// var isAllowedToVote = function (age){
//     return age>=18;
// }

// Arrow Functions
// var isAllowedToVote =  (age) => age>=18;

// const isUserAllowedToOpenBankAccount =  (age,minBalance) => age>=18 && minBalance>=5000;





// Data Structures 

// -->  Array
// const fruits = ['apple',' cheeku ', 'aadu', 'santra'];

// console.log(fruits[0]);

// fruits.push("Nikhil")


// console.log(fruits.length);


// console.log(fruits.includes("Nikhil"))
// const firsele = fruits.shift();
// console.log(firsele);
// console.log(fruits)


// fruits.unshift('ARR','SSD');
// console.log(fruits)

// console.log(fruits.pop());


// console.log(fruits.indexOf("ARR"))


// HIGHER ORDER FUNCTIONS


// function meraPyaraFucntion(udharkaFunction){

//     return udharkaFunction()+40;

// }


// function cartoon(){
//     return 10;
// }


// console.log(meraPyaraFucntion(cartoon));


// const fruits = ['apple',' cheeku ', 'aadu', 'santra'];


// function printKrdo(ele){
//     console.log(ele);
// }
// fruits.forEach(printKrdo)


// fruits.forEach(ele => console.log(ele));


// const nums =[1,2,3,4,1,5];


// const result = nums.map((e)=> e*2);

// console.log(result);