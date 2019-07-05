var angka = 1;
var asteriks = '*';
for(var angka=1; angka<=5; angka++) {
    console.log (asteriks);
}


var rows2 = 5;
var i=0;
while (i<rows2) {
  var asteriks = '*';
  var j = 1;
  while (j<rows2) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}

var rows3 = 5;
var initial = 1;
var i = 0;

while (i<rows3) {
  var pyramid = '*';
  var j=0;
  while (j<i) {
    pyramid = pyramid +'*';
    j++;
  }
  console.log(pyramid);
  i++;
}