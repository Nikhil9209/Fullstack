console.log("External js ")
 function sayhello(){
            console.log("My first function");
}
sayhello();
var f_name ="Nikhil ";
//js is a loosely typed language 
console.log('Value of f_name',f_name);
var x = "Her";
console.log(x);
x = 10;
console.log(x);

// Function

function addNumber(Num1,Num2){
    var result= Num1+ Num2;
    console.log(result);
}
addNumber(5,10);
addNumber(10,12);

//Condtitonals 
var age = 19;
var conditon = age>=18;
if (conditon){
    console.log("You can vote ");
}