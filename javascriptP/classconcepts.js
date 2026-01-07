class car{
    constructor(brand, model, year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    refuel(){
        console.log("Refueling the car..."+this.brand);
    }
}

const mycar=new car("Ford","Mustang",2021);
console.log(mycar.brand); //Ford
console.log(mycar.model); //Mustang
console.log(mycar.year); //2021
mycar.refuel(); //Refueling the car...


const mycar2=new car("Toyota","T1",2023);
console.log(mycar2.brand); //Toyota
console.log(mycar2.model); //T1
console.log(mycar2.year); //2023
mycar2.refuel(); //Refueling the car...

const num=32;
const str1=String(num);
console.log(str1+10); //32
console.log(typeof str1); //string

