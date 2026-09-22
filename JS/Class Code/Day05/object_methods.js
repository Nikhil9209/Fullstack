const { ServerClosedEvent } = require("mongodb");
const { combine } = require("zustand/middleware");

const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};

const keys =  Object.keys(artifact);
const values = Object.values(artifact);
const entries = Object.entries(artifact);

console.log(keys,values,entries);


for(const [key,value] of Object.entries(artifact)){
    console.log(`${key} : ${value}`);
}


const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
]; 

console.log(Object.fromEntries(priceList))

const displayCase = {
  artifact: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase);


const catalogEntry = {
  id: "ART-001",
  description: "Ancient Crows",
  verified: true,
};


Object.seal(catalogEntry);


const secureArtificats = { name: "Ruby Pendant" };

Object.defineProperty(secureArtificats, "catelogId", {
  value: "SEC-999",
  writable: false,
  enumerable: false,
  configurable: false,
});  

console.log(secureArtificats.catelogId)


secureArtificats.catelogId ="Hacked"

console.log(secureArtificats.catelogId);


for(const[key,value] of Object.entries(secureArtificats)){
    console.log(`${key}:${value}`);
}