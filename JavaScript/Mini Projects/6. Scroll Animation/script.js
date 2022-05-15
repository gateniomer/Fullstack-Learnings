const body = document.querySelector('body');
for(let i=0;i<10;i++){
  addCard(i+1,body);
}
const cards = document.querySelectorAll('.card');
let breakpoint = window.innerHeight-200;
checkForCards();
addEventListener('scroll',(e)=>{
  checkForCards();
});

function checkForCards(){
  cards.forEach(card => {
    const cardY = card.getBoundingClientRect().top;
    console.log(cardY)
    if(cardY<breakpoint){
      card.classList.add('show');
    }else{
      card.classList.remove('show');
    }
  })
}
function addCard(counter,body){
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.textContent = counter;
  div.className='card show';
  div.appendChild(h2);
  body.appendChild(div);
  counter++;
}