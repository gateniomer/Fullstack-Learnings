const slider = document.querySelector('.slider');
const arr = [];
let index = 0;
const buttons = document.querySelectorAll('.slider button');

changeBackground(arr,index);

slider.addEventListener('click',e=>{
  if(e.target.id==='prev'){
    if(index!==0) index--;
    changeBackground(arr,index);
  }
  if(e.target.id==='next'){
    index++;
    changeBackground(arr,index);
  }
});

async function requestImageAPI(){
  const response = await fetch('https://source.unsplash.com/random');
  return response.url;
}

async function getImageFromArray(arr,index){
  if(typeof arr[index] === 'undefined'){
    const image = await requestImageAPI();
    arr.push(image);
    addDot();
  }
  return arr[index];
}

function changeBackground(arr,index){
  //disable buttons
  buttons.forEach(button =>{
    button.disabled = true;
  })
  
  getImageFromArray(arr,index)
  .then(img =>{
    document.body.style.backgroundImage = `url(${img})`;
    slider.style.backgroundImage = `url(${img})`;
    //enable buttons
    buttons.forEach(button =>{
      button.disabled = false;
    })
    updateDots(index);
  })
  .catch(err => console.log(err));
}

function updateDots(index){
  const dots = document.querySelectorAll('.dots div');
  const dotsArr = Array.from(dots);
  dotsArr.forEach((dot,i)=>{
    if(i===index){
      dot.style.backgroundColor = 'grey';
    }else{
      dot.style.backgroundColor = 'white';
    }
  });
}

function addDot(){
  const dotDiv = document.querySelector('.slider .dots');
  const dot = document.createElement('div');
  dot.style.width = '10px';
  dot.style.height = '10px';
  dot.style.borderRadius = '50%';
  dot.style.margin = '2px';
  dot.style.backgroundColor = 'white';
  dotDiv.appendChild(dot);
}