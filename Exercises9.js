function shoutOut() {
    return 'Halo Function';
  }
  
var tampung = shoutOut ();
console.log (tampung)




function calculateMultiply (num1, num2) {
    return num1 * num2
}

var num1 = 5;
var num2 = 6;

console.log(calculateMultiply (num1,num2))


var name ='Niko';
var age = 22;
var address = 'Medan';
var hobby = 'Basket';

function processSentence() {
    return 'Nama saya' +  name + ' Umur saya ' +  age + ' Alamat saya ' +  address + ' Hobby saya ' +  hobby
}
console.log (processSentence ())