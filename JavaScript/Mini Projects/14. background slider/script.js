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

async function updateImageArray(arr,index){
  //if we tried to load a new image, request it and push to array
  if(typeof arr[index] === 'undefined'){
    const image = await requestImageAPI();
    arr.push(image);
    //add dot if new image added
    addDot();
  }
  return arr;
}

//change background of body and slider
function changeBackground(arr,index){
  //disable buttons UI
  disableButtons(true);

  updateImageArray(arr,index)
  .then(arr =>{
    //changing background
    document.body.style.backgroundImage = `url(${arr[index]})`;
    slider.style.backgroundImage = `url(${arr[index]})`;
    //enable buttons
    disableButtons(false);
    setCurrentDot(index);
  })
  .catch(err => console.log(err));
}

//set current dot by slide index
function setCurrentDot(index){
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

//add new dot to container
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

function disableButtons(bool){
  const buttonsArr = Array.from(buttons);
  buttonsArr.forEach(button =>{
    button.disabled = bool;
  })
}