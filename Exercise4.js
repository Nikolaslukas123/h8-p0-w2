var tanggal = 32;
var bulan = 12;
var tahun = 2020;

switch(bulan) {
    case 1:
        {    
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){
        console.log(tanggal+" Januari "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    } 
    case 2:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){  
        console.log(tanggal+" Februari "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }
    case 3:
        {    
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" Maret "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    } 
    case 4:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" April "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }
    case 5:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" Mei "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }
    case 6:
        {   
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" Juni "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break; 
    } 
    case 7:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" Juli "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }
    case 8:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){   
        console.log(tanggal+" Agustus "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }
    case 9:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){   
        console.log(tanggal+" September "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }  
    case 10:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" Oktober "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }
    case 11:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" November "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;
    }
    case 12:
        {
        if(tanggal>0 && tanggal<32 && tahun>1899 && tahun<2201){    
        console.log(tanggal+" Desember "+tahun);
        }
        else{
            console.log("Please check the Date and the Year");
        }
        break;                  
    }
    default:
        {
        console.log("Invalid input for bulan");
    }
}
