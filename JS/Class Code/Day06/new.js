function TataCar(chasisNumber,modelName){
      this.chasisNumber = chasisNumber
      this.modelName = modelName
      this.fuelLevel = 100
}


TataCar.prototype.status = function (){
    return `Tata ${this.modelName} ${this.chasisNumber}  fuel : ${this.fuelLevel}`
}

const car1 = new TataCar("d1 1011", "Nexon");
const car2 = new TataCar("Rj 14", "punch")

console.log(car1.fuelLevel);
console.log(car2.modelName )

//dono same nhi hai 

function creatAuto(id,route){
    return{
        id,route,
        run(){
            return `Auto ${ this.id} running on ${this.route}`
        }
    }
}


const auto1 = creatAuto("auto1", "jaipur - raj")

console.log(auto1.run())