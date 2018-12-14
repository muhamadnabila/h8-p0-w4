function kaliTerusRekursif(angka) {
    if ( angka < 10){
        return angka
    }
    var str = String(angka)
    var counter = 1
    for ( var i = 0; i < str.length; i++){
        counter = counter * Number(str[i])
    }
    return kaliTerusRekursif(counter)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
  
  