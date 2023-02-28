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

// function animal(name,species){
//     this.name = name;
//     this.species = species;
//     this.speak = function(){
//         console.log(`${name} is speaking....`)
//     }
// }
// let simba = new animal("simba the lion","Feline");
// (simba.speak())
// const myNotification = new Notification("Hello!");


// let obj1 = {
//     name:"yash",
//     birthdate:"26/11/2000",
//     address:"ahmd",
//     country:"India"
// }
// let obj2 = {
//     name:"Daksh",
//     birthdate:"12/12/2009"
// }

// // inheriting values from obj1 to obj2

// // obj2.__proto__ = obj1;

// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);


// object and classes in js

class Animal{
    #planetNo = 67;
    constructor(name,species){
        this.name= name;
        this.species = species;
        }
        speak(){
            console.log(`${this.name} is of ${this.species} is speaking.....`);
            this.#showMeYourAdhaarId();
        }
        #showMeYourAdhaarId(){
            console.log("the id is .............")
        }
}

class Lion extends Animal{

}
let simba = new Lion("simba","Lion Feline");
console.log(simba.planetNo)






























