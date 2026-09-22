let clue = "it is near cupboard.";
console.log(clue);


let suspectName1 ="Nikhil"
let suspectAge = 20;

console.log("Suspect",suspectName1,"|Age" , suspectAge);

console.warn( "Do not touch it ");
console.error("Error:404 Not found");

const evidenceLog = [
  { id: 1, item: "Muddy footprint", location: "Window sill" },
  { id: 2, item: "Broken glass", location: "Living room" },
  { id: 3, item: "Red fiber strand", location: "Door handle" },
];

console.table(evidenceLog);

console.group("grouping start");
console.log("My log 1");
console.log("My log 2");


console.time("Time taken ...")

let dnaMatches = 0 ;

for(let i = 0; i<1_00_000;i++){
    dnaMatches++;
}

console.timeEnd("Time taken ...")


console.count("chaicode")
console.count("chaicode")
