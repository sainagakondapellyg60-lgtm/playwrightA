//1.function declaration    

function add(a,b){
    return a+b;

}
console.log(add(2,3)); //5
console.log("=========");

//2.function expression ==Aonymous function
const multiply=function(x,y){
    return x*y;
}

const mul=multiply(4,5);
console.log(mul); //20

console.log("=========");

//3.Arrow function - anonymous function shorter syntax
const divide=(x,y)=>x/y;

console.log(Math.floor(divide(20,3))); //5

//4.function constructor
const Resvalue=new Function('a','b','return a-b;'); 
console.log(Resvalue(10,12)); //-2
console.log("=========");


//5.IIFE - Immediately Invoked Function Expression
(function(name){
    console.log("Hello "+name);
})("Sae");

console.log("=========");

//6.Generator function
//function* and yeild keyword
function* genaretNumberSquence(){
    yield 1;
    yield 2;
    yield 3;
}
const gen=genaretNumberSquence();
console.log("Generator Function Output:");
console.log(gen.next().value);  //1
console.log(gen.next().value);  //2          
console.log(gen.next().value);  //3
console.log("=========");


//7.anonymous function
//no specific name
let numbertosquare=[1,2,3,4,5,]
let squares=numbertosquare.map((e)=>e*e);
console.log(squares); //[ 1, 4, 9, 16, 25 ]
console.log("=========");
//8.recursive function
function factorial(n){ //5*4*3*2*1
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5)); //120
console.log("=========");
//9.higher order function

function additionq(a,b){
    return a+b;
}

function operate(funcName,a,b){
  
    return funcName(a,b);
}
console.log(operate(additionq,4,5)); //9
console.log("=========");



///arrows functions:

const greet=(username='Sae', age='23')=>`Hello ${username}! You are ${age} years old`
console.log(greet());

console.log(greet('Naga',25));
console.log("=========");

//rest parameters

   const sum= (...numbers)=>numbers.reduce((acc, num)=> acc+num,0);
    console.log(sum(1,2,3,4,5)); //15
    console.log("=========");   

    const browinfo=(broswer='chrome',...details)=>{ 
        console.log(`Browser : ${broswer}`);
        console.log('Details : ', details);
    }
    console.log(browinfo('firefox','v89','64bit'));
    console.log(browinfo());
    console.log("=========");

    

