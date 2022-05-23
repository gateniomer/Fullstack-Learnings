const slider = document.querySelector('#slider');
const cup = document.querySelector('#cup');
const water = document.querySelector('#water');
const title = document.querySelector('#cup h3');
const liter = 2;

updateWater(0);

function updateWater(value){
  water.style.height = `${value}%`;
  if(value==='100'){
    title.textContent='Finished!';
  }else{
    title.innerHTML = `${(liter-liter*value/100).toFixed(2)}L<br> remained`
  }
}