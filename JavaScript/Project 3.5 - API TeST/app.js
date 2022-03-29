//Intantiate ajaxLib

const names = [];

for(let i = 0;i<10;i++){
  const ajax = new ajaxLib();
  ajax.get('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number',function(result){
    console.log(result);
    names.push(result);
    if(i===9){
      for(let i = 0;i<10;i++){
        document.querySelector('.container').innerHTML+=`<h1>${names[i].data[i].artist_display}</h1>`;
    }
    }
    // document.querySelector('.container').innerHTML+=`<h1>${result.data[i].artist_title}</h1>`;
  });
}



