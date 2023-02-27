// below method creates objects using a function

// function animal(name,species){
//     const obj ={}
//     obj.name = name;
//     obj.species = species;
//     obj.speak = function(){
//         console.log(`${this.name}........is speaking....`)
//     };
//     return obj;
// }

// lets make similar objects using a constructor

function animal(name,species){
    this.name = name;
    this.species = species;
    this.speak = function(){
        console.log(`${name} is speaking....`)
    }
}
let simba = new animal("simba the lion","Feline");
(simba.speak())