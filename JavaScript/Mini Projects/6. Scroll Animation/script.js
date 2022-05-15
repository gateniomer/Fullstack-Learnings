const body = document.querySelector('body');
let scrollMax=0;
scrollMax = addCard(scrollMax,body);
scrollMax = addCard(scrollMax,body);
scrollMax = addCard(scrollMax,body);
scrollMax = addCard(scrollMax,body);
scrollMax = addCard(scrollMax,body);
addEventListener('scroll',(e)=>{
  console.log(scrollY);
  if(screenY>(scrollMax-1000)){
    console.log('success')
    scrollMax = addCard(scrollMax,body);
    
  }
});

function addCard(scrollMax,body){
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.textContent = scrollMax;
  div.className='card';
  div.appendChild(h2);
  body.appendChild(div);
  scrollMax+=200;
  return scrollMax;
}