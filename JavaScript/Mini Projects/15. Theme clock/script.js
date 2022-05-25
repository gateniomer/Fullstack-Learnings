const needles = document.querySelectorAll('.needle');
const needlesArray = Array.from(needles);
const toggleBtn = document.querySelector('.toggle');
const html = document.querySelector('html');
const time = document.querySelector('.time');
const dateText = document.querySelector('.date');
toggleBtn.addEventListener('click',e=>{
  html.classList.toggle('dark');
  html.classList.contains('dark')?toggleBtn.textContent = 'Light Mode':toggleBtn.textContent = 'Dark Mode';
});
setInterval(()=>{
    const date = new Date();
    needles[0].style.transform=`translate(-50%,0) rotateZ(${date.getHours()*30}deg)`
    needles[1].style.transform=`translate(-50%,0) rotateZ(${date.getMinutes()*6}deg)`
    needles[2].style.transform=`translate(-50%,0) rotateZ(${date.getSeconds()*6}deg)`

    time.textContent = `${date.getHours()}:${date.getMinutes()}`;
    dateText.innerHTML = `<span class="circle">${date.getDate()}</span><span> ${date.getMonth()+1}/${date.getFullYear()}</span>`;
},1000);
