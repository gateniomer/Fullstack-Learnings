const text = document.querySelector('.blur-overlay h1');
const blurOverlay = document.querySelector('.blur-overlay');
let counter=0;
const interval = setInterval(()=>{
  if(counter>100){
    clearInterval(interval);
    blurOverlay.style.visibility = 'hidden';
  }else{
    text.textContent = `${counter}%`;
    counter++;
    blurOverlay.style.backdropFilter=`blur(${100-counter}px)`;
    blurOverlay.style.opacity = (100-counter)/100;
  }
},20);