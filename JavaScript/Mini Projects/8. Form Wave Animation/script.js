const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
//change label inner text to spans
labels.forEach(label =>{
  // const arr = Array.from(label.textContent);
  // label.innerText='';
  // arr.forEach((char,index) =>{
  //   const span = document.createElement('span');
  //   span.style.transitionDelay=`0.${index}s`;
  //   span.innerText = char;
  //   label.appendChild(span);
  // });
  label.innerHTML = label.innerText
  .split('')
  .map((char,index)=> `<span style="transition-delay:${index*50}ms">${char}</span>`)
  .join('');
});

inputs.forEach(input =>{
  input.addEventListener('focus',e =>{
    const label = e.target.parentElement.children[0];
    const spans = Array.from(label.children);
    spans.forEach(span => {
      span.style.position = 'relative';
      span.style.top = '-20px';
    });
  });
  input.addEventListener('focusout',e =>{
    const label = e.target.parentElement.children[0];
    if(input.value==='') label.style.position = 'absolute';
  });
});