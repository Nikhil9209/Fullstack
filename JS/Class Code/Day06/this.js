console.log(this)


function ranveerOnglobalStage(){
    return typeof this;
}

console.log(ranveerOnglobalStage)


function ranveerWithNoScript(){
    "use strict"
    return this ;
}

console.log(ranveerWithNoScript())





const bollywoodfilm= {
    name : "bajirao",
    lead : "Ranveer",


    introduce(){
        return `${this.lead} perform in ${this.name}`
    }
}



console.log(bollywoodfilm.introduce());




const filmDirector = {

    name : "Sanjay leela bansal",
    cast :["ranveer", "deepika"],

    announceCast(){
        this.cast.forEach((actor)=>{
            console.log(`${this.name} introduces ${actor}`);
        })
    }


}


console.log(filmDirector.announceCast());



const filmset = {
    crew :'Spot Boys',
    prepareProps(){
        console.log(`Inner this.crew: ${this.crew}`);


        function arrangeChairs(){
            console.log(`Inner this.crew: ${this.crew}`);
        }
        arrangeChairs();


        const arrangeLights = ()=>{
            console.log(`Arrow this.crew : ${this.crew}`)
        }

        arrangeLights();
    },
};


filmset.prepareProps();



// detached Mehods