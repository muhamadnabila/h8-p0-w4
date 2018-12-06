function digitPerkalianMinimum(angka) {
    var arr = []
    
    for ( var i = 0; i <= angka; i++){
        var temp = ''
        for ( var j = 0; j <= angka; j++){
            if ( i * j === angka){
                temp += String(i) + String(j)
                arr.push(temp)
            } 
        }
    }
    // console.log(arr)
    return arr.sort(function(value1, value2) { return value1 < value2 })[0].length   
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
   console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  