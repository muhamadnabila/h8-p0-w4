function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    var result = []
    var pembeliSepatu = []
    var pembeliBaju = []
    var pembeliSweater = []
    var stokSepatu = listBarang[0][2]
    var stokBaju = listBarang[1][2]
    var stokSweater = listBarang[2][2]

    for ( var i = 0; i < shoppers.length; i++) {
        if ( shoppers[i].product === 'Sepatu Stacattu' ){
            if ( shoppers[i].amount <= stokSepatu){
                pembeliSepatu.push(shoppers[i].name)
                stokSepatu  -= shoppers[i].amount
            } 
        }
        else if ( shoppers[i].product === 'Baju Zoro'){
            if ( shoppers[i].amount <= stokBaju){
                pembeliBaju.push(shoppers[i].name)
                stokBaju  -= shoppers[i].amount
            }
        }
        else if ( shoppers[i].product === 'Sweater Uniklooh'){
            if ( shoppers[i].amount <= stokSweater){
                pembeliSweater.push(shoppers[i].name)
                stokSweater  -= shoppers[i].amount
                
            }
        }
    }
    //  console.log('ini pembeli sepatu =>' + pembeliSepatu,'ini pembeli baju =>'+ pembeliBaju,'ini pembeli sweater =>'+ pembeliSweater)
     //console.log('ini sisa sepatu =>' + stokSepatu, 'ini sisa baju =>'+ stokBaju,'ini sisa sweater =>'+ stokSweater)
   
     var sisaStok = 0
     var pembeli = []
     for ( var j = 0; j < listBarang.length; j++){
         
        if (listBarang[j][0] === 'Sepatu Stacattu'){
            pembeli = pembeliSepatu
            sisaStok = stokSepatu
        }
        else if ( listBarang[j][0] === 'Baju Zoro'){
            pembeli = pembeliBaju
            sisaStok = stokBaju
        }
        else if ( listBarang[j][0] === 'Sweater Uniklooh'){
            pembeli = pembeliSweater
            sisaStok = stokSweater
        }
        var obj = {}
        obj.product = listBarang[j][0]
        obj.shoppers = pembeli
        obj.leftOver = sisaStok
        result.push(obj)
    }
    console.log(result)
    
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
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