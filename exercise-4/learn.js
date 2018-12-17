function cariModus(arr) {
    var modus = 0 
    var jumlahModus = 0
    var jumlahModusTerbanyak = 0
    for ( var i = 0; i < arr.length; i++){
        var flag = false        
        for ( var j = 0; j < arr.length; j++){
            if ( i !== j ){
                if (arr[i] === arr[j]){
                   flag = true
                } 
            }
            if ( flag === true ){
                    jumlahModus += 1
                //console.log(jumlahModus)
                if ( jumlahModus > jumlahModusTerbanyak){
                    jumlahModusTerbanyak = jumlahModus
                    modus = i
                }
            }
        } 
        
    }
    console.log(modus)
    return arr[modus]
}



console.log(cariModus([10, 4, 2, 4, 5, 5]))
// 10 - 4 5 2 4 5 5  = x
// 4  - 10 5 2 4 5 5 = v
// 5  - 10 4 2 4 5 5 = v
// 2  - 10 4 5 4 5 5 = x
// 4  - 10 4 5 2 5 5 = v
// 5  - 10 4 5 2 4 5 = v
// 5  - 10 4 5 2 4 5 = v