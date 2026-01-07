let browser;
function checkBroswer(browser){
    if(browser==='chrome'){
    console.log('launch ' +browser) ;
  
    }else if (browser==='edge'){
        console.log('launch ' +browser)  ;
    }
    else if (browser==='firefox'){
        console.log('launch ' +browser)   ;
    }else{
        console.log('broswer does not exist '+browser);
    }
}
checkBroswer('edge');
checkBroswer('chrome');
checkBroswer('firefox');
checkBroswer('defualt');


