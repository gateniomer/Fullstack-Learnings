const btn = document.querySelector('.ripple');

btn.addEventListener('click',function(e){
  const ripple = document.createElement('div');
  ripple.className = 'circle';
  ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
  ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
  this.appendChild(ripple);

  setTimeout(()=>ripple.remove(),500);
});