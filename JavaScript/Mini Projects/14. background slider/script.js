async function requestImage(){
  const response = await fetch('https://source.unsplash.com/random');
  return response.url;
}

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

async function getImage(arr,index){
  if(typeof arr[index] !== 'undefined'){
    return arr[index];
  }else{
    const image = await requestImage();
    arr.push(image);
    return arr[index];
  }
}

function changeBackground(arr,index){
  //disable buttons
  buttons.forEach(button =>{
    button.disabled = true;
  })
  getImage(arr,index)
  .then(img =>{
    document.body.style.backgroundImage = `url(${img})`;
    slider.style.backgroundImage = `url(${img})`;
    //enable buttons
    buttons.forEach(button =>{
      button.disabled = false;
    })
    console.log(arr);
  })
  .catch(err => console.log(err));
}