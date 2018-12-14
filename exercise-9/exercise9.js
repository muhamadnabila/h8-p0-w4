function checkAB(num) {

    var a = 0
    var b = 0
    
    for ( var i = 0; i < num.length; i++){
        if (num[i] === 'a'){
            a = i
        } 
        else if ( num[i] === 'b'){
            b = i
        }
    }
    if ( b - a === 4 || a - b === 4 ){
        return true
    }
    else {
     return false   
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false