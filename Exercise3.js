var nama = 'Niko';
if (nama==null) {
  console.log ('nama harus diisi!');
} else {
  var peran = 'Ksatria' ;
  if (peran==null) {
    console.log ('halo ' + nama +  ' Pilih peran mu untuk memulai game')
    }
    else {
    console.log ('Selamat datang di dunia proxytia, ' + nama);
  
    if (peran==='Ksatria') {

    console.log ('Halo ' + peran + ' ' + nama +  ', Kamu dapat menyerang dengan senjatamu');
    } 
    else if (peran==='Tabib') {
      console.log ('Halo' + peran + ' ' + nama + 'Kamu akan membantu temanmu yang terluka');
    }
    
    else if (peran==='penyihir') {
      console.log ('Halo' + peran + ' ' + nama + 'Ciptakan keajaiban yang membantu memenangkanmu');
    }
    }
}



 


  





