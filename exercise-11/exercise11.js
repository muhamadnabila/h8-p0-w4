function shoppingTime(memberId, money) {
    var sisaMoney = money
    var chart = []
    
    for (var i = 0; i < 5; i++){
        if ( sisaMoney >= 1500000 ){
            chart.push('Sepatu Stacattu')
            sisaMoney -= 1500000
        }
        else if ( sisaMoney >= 500000){
            chart.push('Baju Zoro')
            sisaMoney -= 500000
        }
        else if ( sisaMoney >= 250000){
            chart.push('Baju H&N')
            sisaMoney -= 250000
        }
        else if ( sisaMoney >= 175000){
            chart.push('Sweater Uniklooh')
            sisaMoney -= 175000
        }
        else if ( sisaMoney >= 50000){
            chart.push('Casing Handphone')
            sisaMoney -= 50000
            break;
        }
    }
    //console.log(chart)
    var result = {}
    result.memberId = memberId
    result.money = money
    result.listPurchased = chart
    result.changeMoney = sisaMoney
    
    
    if (memberId === '' || money === undefined ){
        result = 'Mohon maaf,toko X hanya berlaku untuk member saja'
        
    }
    else if ( money < 50000){
        result = 'Mohom maaf, uang tidak cukup'
    }
    return result
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja