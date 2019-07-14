///////////////
console.log("LOOPING PERTAMA");
var counter=2;
while(counter<21){
    console.log(counter + " - I love coding");
    counter=counter+2;
}
counter=20;
console.log("LOOPING KEDUA")
while(counter>1){
    console.log(counter + " - I will become fullstack developer");
    counter=counter-2;
}
//////////////////
console.log("LOOPING PERTAMA");
for(var i = 1; i<21;i++){
    console.log(i+" - I love coding");
}
console.log("LOOPING KEDUA");
for(var i = 20; i>0;i--){
    console.log(i+" - I will become fullstack developer");
}

//////////////////
for(var i=1;i<101;i++){
    if((i%2)!==0){
        console.log("GANJIL");
    }else if((i%2)===0){
        console.log("GENAP");
    }
}
for(var i=1;i<101;i=i+2){
    if((i%3)===0){
        console.log(i+" KELIPATAN 3");
    }else{
        console.log('""');
    }
}
for(var i=1;i<101;i=i+5){
    if((i%6)===0){
        console.log(i+" KELIPATAN 6");
    }else{
        console.log('""');
    }
}
for(var i=1;i<101;i=i+9){
    if((i%10)===0){
        console.log(i + " KELIPATAN 10");
    }else{
        console.log('""');
    }
}
