function toRoman(num) {
  var arabicNum = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
    },
    roman = '', 
    i;
  for ( i in arabicNum ) {
    while (num >= arabicNum[i]) {
      roman += i;
      num -= arabicNum[i];
    }
  }
  return roman;
}

function toArabic(rom){
  var length = rom.length,
    arabicNum = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
    },
    num = 0, 
  for (var i = 0; i < length; i++) {
    for (var prop in arabicNum ) {
      if(rom.charAt(i) == prop){
        if(length == 2){
          if(i == 0){
          num += arabicNum[prop];
          }else{
            num -=arabicNum[prop];
          }
        }else{
          num +=arabicNum[prop];
        }
      }
    }
  }
  return Math.abs(num);
}
