//No.1
function shoutOut(){
    return "Halo Function!";
}
console.log(shoutOut());

//No.2
function calculateMultiply(num1, num2){
    return num1*num2;
}
var num1=5;
var num2=6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//No.3
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name1, age1, address1, hobby1){
    return "Nama saya "+name1+", umur saya "+age1+" tahun, alamat saya di "+address1+", dan saya punya hobby yaitu "+hobby1+"!";
}
var fullsentence = processSentence(name,age,address,hobby);
console.log(fullsentence);
