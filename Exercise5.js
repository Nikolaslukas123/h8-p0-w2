var word = 'JavaScript';
var second = 'is';
word = word +" "+second;
var third = 'awesome';
word = word +" "+third;
var fourth = 'and';
word = word +" "+fourth;
var fifth = 'I';
word = word +" "+fifth;
var sixth = 'love';
word = word +" "+sixth;
var seventh = 'it!';
word = word +" "+seventh;
console.log(word);

//No.2
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]; 
var thirdWord = word[15]+word[16]; 
var fourthWord=word[18]+word[19]; 
var fifthWord=word[21]+word[22]+word[23]+word[24]; 

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//No.3
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4,14); 
var thirdWord3 = word3.substring(15,17); 
var fourthWord3 = word3.substring(18,20); 
var fifthWord3 = word3.substring(21,25); 

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

//No.4
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4,14); 
var thirdWord4 = word4.substring(15,17); 
var fourthWord4 = word4.substring(18,20); 
var fifthWord4 = word4.substring(21,25); 

var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;


console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
