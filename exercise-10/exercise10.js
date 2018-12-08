function changeMe(arr) {
    var nomor = 0
    for ( var i = 0; i < arr.length; i++){
       var obj = {}
       nomor ++
       var fullName = arr[i][0] + ' ' + arr[i][1]
       obj.firstname = arr[i][0]
       obj.lastName = arr[i][1]
       obj.bender = arr[i][2]
       obj.age = arr[i][3]
       if ( arr[i][3] === undefined || arr[i][3] > 2018 ){
           obj.age = 'Invalid Birth Year' 
       }
       else {
           obj.age = 2018 - arr[i][3]
       }
       console.log( nomor + '.' + fullName  )
       console.log(obj)
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""