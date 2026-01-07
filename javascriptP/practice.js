///varioables
var l="hey"
var s=" hello"
 console.log(s)
//var can be redeclared and reassigned -- not preferable in playwright testing
 function print(){
    s=10;
    console.log(s);
 }

 print()
 console.log("123"+l+s+l)
 console.log(s+2+"helo")

// let can be reassigned but not redecalred.
 let m="hello world"
 function lett(){
   console.log(m)
    m=19;

 }
lett() //hello world
console.log(m) //19

//const no redeclare and no reassign

const y=" i am constant try redeclarte and reassign me"
console.log(y)
function res(){
 //const  y=" helo const" //throws error
   console.log(y)
}
res()