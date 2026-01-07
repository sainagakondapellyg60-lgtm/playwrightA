/*
map    → change every item
filter → keep some items
reduce → combine all items
*/

//1.Map  -> takes an array return an array of same length after data trasnformation as defined by user
 //works on every item and return same length
let numbers=[1,2,3];
let double=numbers.map((e)=>e*2);
console.log(double)

//F -> C
//(F-32)*(5/9)
let fahtemps=[32,102,106]

function FtoC(fah){
    return (fah-32) * (5/9)
}
let celius=fahtemps.map(FtoC)
console.log(celius)
console.log("============")


//2.Filter works on selctive items (based on boolean condition/predicate)
let randomNum=[1,2,3,4,5,6,7,8,9,10]
let even= randomNum.filter((r)=> r%2===0)
console.log(even)

let employee=[
 {user: 'sai', age:27,gender:'male', },
  {user: 'raj', age:47,gender:'male', },
   {user: 'Jen', age:37,gender:'female', },
    {user: 'gen', age:17,gender:'female', },
]

let selected=employee.filter((emp)=> {
    return emp.gender==='male'&& emp.age>15;
})
console.log(selected)


console.log("============")

//3.reduce
let allNum=[23,33,21,12]
let max= allNum.reduce((max,num)=>{
if(num>max){
 return num;
}else{
    return max;
}
})
console.log(max)

let sum=allNum.reduce((acc,num)=> acc+num,0)
console.log(sum)

