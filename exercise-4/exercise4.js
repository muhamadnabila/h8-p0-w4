function cariModus(arr) {
   
    // apabila angkanya sama semua maka return -1 
    for ( var i = 0; i < arr.length ; i++){
        var counter = 0
        for ( var j = 0; j < arr.length;  j++){
            if ( arr[i] === arr[j] ){
               counter += 1
            }
            if ( counter === arr.length ){
                return -1
            } 
        }
        // apabila ada angka yang sama return angka yang sama yang paling banyak
            for ( var k = 0; k < arr.length; k++){
                for ( var l = 0; l < arr.length; l++){
                    //console.log(arr[k], arr[l])
                    if ( k !== l){
                        if (arr[k] === arr[l]){
                            return arr[k]
                        } 
                    }
                }
            }
            if ( arr[k] === undefined){
                return -1
            }
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
   console.log(cariModus([5, 10, 10, 6, 5])); // 5
    console.log(cariModus([10, 3, 1, 2, 5])); // -1
    console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
   console.log(cariModus([7, 7, 7, 7, 7])); // -1