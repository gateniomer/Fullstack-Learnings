const progress = document.querySelector('#progress');

const container = document.querySelector('.progress-container');

let circles = document.querySelectorAll('.circle');

const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');

let step = 1;

container.addEventListener('click', e =>{
  if(e.target.classList.contains('circle')){
    const circlesArray = Array.from(circles);
    step = circlesArray.indexOf(e.target)+1;
    changeProgress();
    changeBtnState();
  }
});


//Button's event listeners
nextBtn.addEventListener('click',e=>{
  step++;
  changeProgress();
  changeBtnState();
});

prevBtn.addEventListener('click',e=>{
  step--;
  changeProgress();
  changeBtnState();
});

addBtn.addEventListener('click',e=>{
  const newStep = document.createElement('div');
  newStep.className = 'circle';
  newStep.appendChild(document.createTextNode(circles.length+1));
  container.appendChild(newStep);
  circles = document.querySelectorAll('.circle');
  changeProgress();
  changeBtnState();
});

removeBtn.addEventListener('click',e=>{
  const lastStep = container.lastElementChild;
  lastStep.remove();
  circles = document.querySelectorAll('.circle');
  console.log(circles.length);
  changeProgress();
  changeBtnState();
});

function changeBtnState(){
  if(step>=circles.length){
    nextBtn.disabled=true;
    prevBtn.disabled=false;
  }else if(step<=1){
    prevBtn.disabled=true;
    nextBtn.disabled=false;
  }else{
    nextBtn.disabled=false;
    prevBtn.disabled=false;
  }
  if(circles.length<=2) {
    removeBtn.disabled=true;
  }else{
    removeBtn.disabled=false;
  }
}
function changeProgress(){
  circles.forEach((circle,index)=>{
    if(index < step){
      circle.classList.add('active');
    }else{
      circle.classList.remove('active');
    }
  });

  const activeCircles = document.querySelectorAll('.active');
  progress.style.width = `${(activeCircles.length-1)/(circles.length-1)*100}%`;
}