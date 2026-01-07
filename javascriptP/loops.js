//loops

//for loop
for(let i=0; i<=5; i++){
    console.log(i);
}
console.log('=====================')

//for.. of loop for arrays

const marks=[6,7,8,9,10];
for (const e of marks){
    console.log(e)
}
console.log('=====================')
let p=1;
while(p<=10){
    
    console.log(p);
    ++p;
}

console.log('=====================')
let n=1;
while(n<=30){

 if(n%5==0){
    console.log('hi n' + n);
  // break; once the condition is true itb breaks out of loop.
 }else{
    console.log(n)
 }
n++
}

//to loop in object use For..in

const user={
    name: 'sai',
    age : 25,
    city :  'hyd',
}

for (const key in user){
    
    console.log(key+ ' : '+user[key])
    }