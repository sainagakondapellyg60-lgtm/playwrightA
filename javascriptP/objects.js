const person={
    name:"Sae",
    age:25,
    city:"Thailand" 
};
console.log(person.name); //Sae
console.log(person.age); //25    

//2.constructing object using constructor function
function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}

const car1=new Car("Toyota","Camry",2020);
console.log(car1.make);

//3.instance of class
class Animal{
    constructor(name, species){     
        this.name=name;     
        this.species=species;
    }           
}

const animal1=new Animal("Leo","Lion");
console.log(animal1.name); //Leo
        
console.log(typeof person);