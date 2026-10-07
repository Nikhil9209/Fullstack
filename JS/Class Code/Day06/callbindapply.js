// call and apply = > basic chef (kitchen);
// bind => return a new function 

function cookDish(ing,style){
    return `${this.name} prepares ${ing} in ${style}`

}
const sharamsKitchen = {name:"Sharmas jis kitchen"};
const guptasKitchen = {name : "Gupta jis kitchen "};
console.log( cookDish.call(sharamsKitchen, "panner and spices", "Mughlai"));


const GuptaOrder = [ "chai aur bun" ,  "chai aur prantha"];;

console.log(cookDish.apply(guptasKitchen,GuptaOrder))


const bills  =[ 100,30,40,50]

Math.max.apply(null,bills)




function reportDilevery(location,status)
{
    return `${this.name} at ${location} :${status}`

}

const delieryBoy = {name :"ranveer"}

console.log("call:", reportDilevery.call(delieryBoy,"Lyari","Ordered"))
console.log("call:", reportDilevery.apply(delieryBoy,["Lyari","Ordered"]))
console.log("call:", reportDilevery.bind(delieryBoy,"Haridwar","what"))

const BindREPORT = reportDilevery.bind(delieryBoy,"Haridwar","what")

console.log(BindREPORT());