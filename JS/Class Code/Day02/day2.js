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

function add(num1,num2){
    const result = num1+num2;
    return result ;
}


const r =  add(2,5);
console.log(r);



function cartoon(){

    function cartoonInsideCartoon(){

        return 'Naruto';
    }
    return cartoonInsideCartoon; //  It is returning a fucntion .. and 

}

const anime = cartoon();
const ri = anime ();
console.log(ri);

