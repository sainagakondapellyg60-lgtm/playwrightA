import { ListFormat } from "typescript";

console.log("start solving")

//1.reverse a string  
console.log(" === reverse the words of string===")
const OriginalString: string = "All men went to F1 Movie";
function reverseString(str: string): string {
    return str.split(' ').reverse().join(' ');//only words not all characters
    //return str.split('').reverse().join('');// for all chars reverse
}
console.log(reverseString(OriginalString))

//manual
function ReverseStringManual() {
    let newRevString = '';

    for (let i = OriginalString.length - 1; i >= 0; i--) {
        newRevString = newRevString + OriginalString[i];//all chars reverse
    }
    console.log(newRevString);
}
ReverseStringManual();

//only words reverse
let arrayString: string[] = OriginalString.split(' ');
let reverString = '';
function revString() {
    for (let i = arrayString.length - 1; i >= 0; i--) {
        reverString = reverString + arrayString[i] + ' ';
    }
    return reverString;
}
console.log(revString())

//2.Find duplicate characters in a string
console.log(" === Find duplicate characters in a string ===")
const duplicateString: string = "hello master heart beat dropped";
let allduplicateChars = new Set<string>();
let arrayofLetters = duplicateString.split('');
let counter = 0;
//console.log(arrayofLetters)
for (let i = 0; i < arrayofLetters.length; i++) {
    if (arrayofLetters[i] == " ") continue
    for (let j = i + 1; j < arrayofLetters.length; j++) {
        if (arrayofLetters[i] === arrayofLetters[j]) {
            allduplicateChars.add(arrayofLetters[i])
        }
    }
}
console.log(allduplicateChars)

//=======================
const seen = new Set()
const duplicates = new Set()

for (const fchar of duplicateString) {
    if (fchar == " ") continue
    if (seen.has(fchar)) {
        duplicates.add(fchar)
    } else {
        seen.add(fchar)
    }
}
console.log(duplicates)


//3*2*1
//factorial
console.log("============ factorial")
const num = 5
let resNum = 1;
for (let i = num; i > 0; i--) {

    resNum = resNum * i;

}
console.log(resNum)
console.log("============ fibonacci")
//fibonacci  find first 7 

const n: number = 7
let a = 0;
let b = 1;
let fibarray1=[]
console.log(a)
console.log(b)
for (let i = 2; i < n; i++) {
  
    let next = a + b
    console.log(next)
    a = b
    b = next
}
console.log("=====")

const list1=[1,2,3,4]
let newlist:any=[];
console.log(list1.length-1)
for(let i=list1.length-1;i>=0;i--){
    newlist.push(list1[i])
}
console.log(newlist)

//HCF
console.log("===HCF of give numbers===")
function findHCF(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Test it
console.log("HCF: "+findHCF(48,36));
//multiple numbers like array of number

let number:number[]=[48,36,106,98,72]
let result=number[0];
 for(let i=1;i<number.length;i++){
   result= findHCF(result,number[i])
 }
 console.log("hcf of array of number :"+ result)

 //LCM

 function lcmValue(a:number,b:number):number{
    let lcm:number=a>b?a:b;
while(true){
    if(lcm%a==0 && lcm%b==0){
        return lcm;
    }
    lcm++;
}
 }
 console.log("LCM : "+lcmValue(30,36))

 //another way
function lcmFormula(a:number,b:number):number{
    
let lcm:number= (a*b)/findHCF(a,b)
return lcm;
}
 console.log("LCm formula wise: "+lcmFormula(30,36))

 
 //fatcorial

 let factvalue=5;
 let factRes=1;

 for(let i=factvalue;i>0;i--){
  factRes=factRes*(i)
 }
console.log(factRes)



//fibonacci

let fibNum=8
let aa=0
let bb=1
let res:any=1;
let fibarray=[];

fibarray.push(aa)
fibarray.push(bb)
 for(let i=0;i<fibNum;i++){
res=res+fibarray[i];
fibarray.push(res)
 }
 console.log(fibarray)
