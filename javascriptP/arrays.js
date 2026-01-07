const { triggerAsyncId } = require("async_hooks");

let array1=[]; //empty array
let numbers=[1,2,3,4,5,6]  //numbers array
let langugaes=['java','ruby','js','ts'] // string arrayh

//1.push
langugaes.push("c")// adds in the last
console.log(langugaes)

console.log('===========')
//2.pop
langugaes.pop()//removes last element
console.log(langugaes)
langugaes.pop()//removes last element
console.log(langugaes)
console.log('===========')

//3.shift
numbers.shift()
console.log('after shift') 
console.log(numbers)//removes the frst element which is 1 and return from 2
let updatednumber=numbers.shift() //operates on [2,3,4,5,6] ,removes 2
console.log(updatednumber) //expecting 2 , since shift removes frst eelemnet and return also

console.log('===========')
//4.unshift
let colors=['blue','red','yellow']
console.log(colors)
colors.unshift('green', 'orange')
console.log(colors)
console.log(colors.length)

console.log('===========')
//5.splice 
let animals=['dog','cat','cow', 'ox']
console.log(animals)
let result=animals.splice(1,2,'bear') // delete and replace with given value bear
console.log('result : '+result) //return wat deleted above
console.log(animals)
animals.splice(0,1) // delete the given element at 0th index
console.log(animals)

console.log('===========')
//6.slice // gives substring of the array based in index values provided
let popular=['insta','snap','reddit','chatgpt','gemini','prep']
let subpopular=popular.slice(1,4)
console.log(subpopular)

console.log('===========')
//7.concat
let janthuv=['cow', 'ox']
let all=janthuv.concat(popular)
console.log(all)
console.log('===========')

//8.indexOf

let col=['black','red', 'blue','yellow', 'red']
console.log(col.indexOf('red')) // if availble gives index if not gives -1

//2nd red index
//console.log(col.indexOf('red',1)) 

console.log(col.indexOf('red',col.indexOf('red')+1) )  // if some addes elemnet in array then
//  the first red psotion chnages since use this

console.log('===========')

//9.includes
let users=['admin','analyst','end','vendor']
console.log(users.includes('end', 'seller')) // return true since one is true

console.log('===========')

//10.forEach
let n=[1,2,3,4,5]
 n.forEach((e)=> {
    console.log(e*3)
 })

