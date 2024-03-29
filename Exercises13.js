function xo(str) {
    // you can only write your code here!
    var kataX = -1;
    var kataO = -1;
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === 'x') {
            kataX += 1;            
        } else if (str[i] === 'o') {
            kataO += 1;
        }
    }
    return kataX === kataO;
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true