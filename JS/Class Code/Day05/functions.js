// console.log(brewPotion("healing herbs ",3 ));

// function brewPotion(ingredient,dose){
//     return `${ingredient} and ${dose}`;
// }



// const distilEssence = (ingredient) =>{

//     return `mixing elexir with ${ingredient}`;
// }

// function oldBrewingLogs(){
//     console.log("type:", typeof(arguments));

//     console.log(Array.isArray(arguments));
//     console.log(arguments);
// }
// oldBrewingLogs("Nikhil","Jangid");

// const arrowBrew = () => {
//     try {
//         console.log(arguments);
//     }
//     catch(er) {
//         console.log(er.message);
//     }
// }

// arrowBrew();

// let globalCount =0;


// function  newfun (name){
//     globalCount++;
// }


// const p = (function(){})();
const potionShop =(function(){
    let inventory =0;

    return {
        brew(){
            inventory++;
            return `Brew potion ${inventory}`;
        },
    }
})();

console.log(potionShop);

console.log(potionShop.brew());