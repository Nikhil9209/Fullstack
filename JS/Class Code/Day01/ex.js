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
var age = 12;
var conditon = age>=18;
if (conditon){
    console.log("You can vote ");
}
else{
    console.log("You cant vote ")
}
//it make code vverbose 
var nage=10
var childCondtion= nage<=10
var teenCondtion =!childCondtion && nage<=19
var adultCondition = nage>19 && nagenage<=40
var seniorConditon = nage>40

if(childCondtion){
    console.log("You are a child")
}
if(teenCondtion){
    console.log("You are Teen")
}

if(adultCondition){
    console.log('You are an Adult')
}
if(seniorConditon){
    console.log('You are a Senior')
}
//else if
var nage=10
var childCondtion= nage<=10
var teenCondtion = nage<=19
var adultCondition = nage<=40
var seniorConditon = nage>40

if(childCondtion){
    console.log("You are a child")
}
else if(teenCondtion){
    console.log("You are Teen")
}

else if(adultCondition){
    console.log('You are an Adult')
}
else{
    console.log('You are a Senior')
}

//loops
for(var x=1;x<=10; x = x+1){
    console.log('Meri X ki value',x)
}
var filesize=1024
var currentFileDownloaded =0

//while loop
while(currentFileDownloaded<filesize){
    console.log('File ko Download krte jaao')
    currentFileDownloaded+=40
}



//doWhileloop
var filesize=1024
var currentFileDownloaded =0

do{
    console.log("Execute the code ")
}
while(currentFileDownloaded>filesize)