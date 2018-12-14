function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    if( shoppers.length === 0 ){
        return []
    }
    

    var resultArray = []
    var pembeliSepatu = []
    var pembeliBaju = []
    var pembeliSweater = []

    var stokSepatu = listBarang[0][2]
    var stokBaju = listBarang[1][2]
    var stokSweater = listBarang[2][2]
    
    
    for ( var i = 0; i < shoppers.length; i++){
    //    console.log(shoppers[i].product)
       if ( shoppers[i].product === 'Sepatu Stacattu'){
           if ( shoppers[i].amount <= stokSepatu){
              pembeliSepatu.push(shoppers[i].name)
                stokSepatu -= shoppers[i].amount
            }
       }
       else if ( shoppers[i].product === 'Baju Zoro'){
           if ( shoppers[i].amount <= stokBaju){
                pembeliBaju.push(shoppers[i].name)
                stokBaju -= shoppers[i].amount
            }
       }
       else if ( shoppers[i].product === 'Sweater Uniklooh'){
           if ( shoppers[i].amount <= stokSweater){
                pembeliSweater.push(shoppers[i].name)
                stokSweater -= shoppers[i].amount
            }
        }
       
    }
   //console.log(pembeliBaju, stokBaju, pembeliSepatu, stokSepatu , pembeliSweater, stokSweater)
    // return resultArray`
    var pembeli = []
    var sisa = 0
    var totProfit = 0
    for ( var k = 0; k < listBarang.length; k++){
        if ( listBarang[k][0] === 'Sepatu Stacattu'){
            pembeli = pembeliSepatu
            sisa = stokSepatu
           
        }
        else if ( listBarang[k][0] === 'Baju Zoro'){
            pembeli = pembeliBaju
            sisa = stokBaju
           
        }
        else if ( listBarang[k][0] === 'Sweater Uniklooh'){
            pembeli = pembeliSweater
            sisa = stokSweater
        }
        
        totProfit = (listBarang[k][2] - sisa) * (listBarang[k][1])
        //  console.log(pembeli,sisa)
        
        var obj = {}
        obj.product = listBarang[k][0]
        obj.shoppers = pembeli
        obj.leftOver = sisa
        obj.totalProfit = totProfit
        
        resultArray.push(obj)
        
        
    }
    
    return resultArray
}
  
  // TEST CASES
//   console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  //console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  //console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]