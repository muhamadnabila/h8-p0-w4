// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

//     Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

//     Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

//     Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

//     Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// for ( var i = 0; i < kamus.length;i++){
//     if ( kamus[i] === 'a'){
//         kosong += '#' 
//     }else {
//         kosong+= kamus[i]
//     }
// } console.log(kosong)

function changeVocals (str) {
    
    var temp = ''
    for ( var i = 0; i < str.length; i++){
        if ( str[i] === 'a' ){
            temp += 'b'
        }
        else if ( str[i] === 'e'){
            temp += 'f'
        }
        else if ( str[i === 'i']){
            temp += 'j'
        }
        else if ( str[i] === 'o'){
            temp += 'p'
        }
        else if ( str[i] === 'u'){
            temp += 'v'
        }
        else {
            temp += str[i]
        }
        
    }
    return temp
    
}
//changeVocals('Sergei Dragunov')

  function reverseWord (str) {
    //  var kata = changeVocals(str)
     var temp = ''
        for ( var i = str.length-1; i >= 0; i--){
            // if ( str.length > 0){
                temp += str[i]
            // }  
        }return temp
   }

 reverseWord('Sergei Dragunov')

  
  function setLowerUpperCase (str) {
    var kamusHurufKecil = 'abcdefghijklmnopqrstuvwxyz'
    var kamusHurufBesar= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var temp = ''
    for ( var i = 0; i < str.length; i++){
        for ( var j = 0; j < kamusHurufKecil.length; j++){
        //     for ( var k = 0; k < kamusHururfBesar.length; k++){
                if (str[i] === kamusHurufKecil[j] ){
                    temp += kamusHurufBesar[j]
                }
                else if ( str[i] === kamusHurufBesar[j]){
                    temp += kamusHurufKecil[j]
                }
                
                // }
                
            }
        if (str[i] === ' ') {
            temp += ' '
        }
    }
    return temp
  }
//   setLowerUpperCase('Sergei Dragunov')
  
  function removeSpaces (str) {
      var temp = ''
    
    for ( var i = 0; i < str.length; i++){
        if ( str[i] !== ' '){
            temp += str[i]
        }
        
    }
    return temp
  }
//   removeSpaces('Sergei Dragunov')
  
  function passwordGenerator (name) {
    var a = changeVocals(name)
    var b = reverseWord(a)
    var c = setLowerUpperCase (b)
    var d = removeSpaces (c)
    
    return d
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'