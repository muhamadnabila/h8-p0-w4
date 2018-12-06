function fpb(angka1, angka2) {
    
    var prima1 = []
    for ( var i = 0; i < angka1; i++){ 
        if (angka1 % i === 0){
            prima1.push(i)
        }
    }   // console.log(prima1)
    var prima2 = []
    for ( var j = 0; j < angka2; j++){
        if ( angka2 % j === 0){
            prima2.push(j)
        }
        
    }//console.log(prima2)
    for ( var k = prima1.length-1; k >= 0; k--){
       // console.log(prima1[k])
        for ( var l = prima2.length-1  ; l >= 0; l--){
            if ( prima1[k] === prima2[l]){
                return prima1[k]
            }
            
        }
    }
        
    
    
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
//   12 = 1.12, 2.6, 3.4, 4.3, 6.2, 12.1
//   16 = 1.16, 2.8, 4.4, 8.2, 16.1

  // 