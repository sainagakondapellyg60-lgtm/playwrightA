// 1.every();  // if all elements pass the test then only it returns true
let numbers=[2,4,6,8,10];
let allEven=numbers.every((n)=> n%2===0);
console.log(allEven); //true

//2.some();// if any one element passes the test then it returns true
let mixedNum=[1,3,4,5,7];
let hasEven=mixedNum.some((n)=>n%2===0);
console.log(hasEven); //true


//3.find() // returns the first element that passes the test
let scores=[12,45,67,89,34,23,90];
let firstHighScore=scores.find((s)=> s>60);
console.log(firstHighScore); //67

//4.findIndex() // returns the index of first element that passes the test
let firstHighScoreIndex=scores.findIndex((s)=> s>60);
console.log(firstHighScoreIndex); //2

//5.includes() // checks if an element is present in the array or not
let chars=['a','b','c','d','e'];
let hasC=chars.includes('c');
console.log(hasC); //true

let hasD=chars.includes('d',3);
console.log(hasD); //true


//7.sort() // sorts the array in place and returns the sorted array
let fruits=['banana','apple','mango','grape'];
let nums=[23,5,67,12,34,89,1];
nums.sort();
console.log(nums); // [ 1, 12, 23, 34, 5, 67, 89 ]
fruits.sort();
console.log(fruits); // [ 'apple', 'banana', 'grape', 'mango' ]

//8.reverse() // reverses the array in place and returns the reversed array
let letters=['a','b','c','d','e'];
letters.reverse();
console.log(letters); // [ 'e', 'd', 'c', 'b', 'a' ]