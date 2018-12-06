function cariMedian(arr) {
    
    if ( arr.length % 2 === 0 ){
        var temp = arr.length / 2 - 1
        var median = arr[temp] + arr[temp + 1]
        return median / 2
    } else {
        var temp = Math.floor(arr.length/2)
        var median = arr[temp]
        return median
    }
   
       
    
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
   console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  // indeks/2

/*
    nums = [1,2] // index 0,1
    nums = [1,2,3,4] // index 1,2
    nums = [1,2,3,4,5,6] // index 2,3
    nums = [1,2,3,4,5,6,7,8] // index 3,4 
 
*/
// jika lengnya 10 maka 4
// jika lengnya 8 maka 3
// jika lengnya 6 maka 2
// jika lengnya 4 maka 1
// jika lengnya 2 maka 0