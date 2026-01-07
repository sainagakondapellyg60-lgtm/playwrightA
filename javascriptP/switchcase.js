const { hkdfSync } = require("crypto");

function checkDayofWeek(dayNumber){
let day;
switch (dayNumber) {
    case 0:
        console.log('monday');
        break;
    case 1:
       day= console.log('tue');
        break;
    case 2:
       day= console.log('wedn');
        break;
     case 3:
       day= 'friday';
        break;
     case 4:
       day= console.log('sun');
        break;
    default:
        console.log('invalid day number')
        break;
}
return day;
}
checkDayofWeek(0)
console.log(checkDayofWeek(3));


let broswer='opera';
switch(broswer){
    case 'chrome':
        console.log('launch chrome');
        break;
     case 'edge':
            console.log('launch edge');
        break;
        case 'opera':
            console.log('launch opera');
        break;
     default:
            console.log('pleas egive correct broswer')
         break;
}