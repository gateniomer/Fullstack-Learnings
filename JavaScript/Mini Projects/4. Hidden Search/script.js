const searchBtn = document.querySelector('.btn');

const search = document.querySelector('.search')

searchBtn.addEventListener('click',()=>{
  if(!search.classList.contains('active')){
    search.classList.add('active');
  } else{
    search.classList.remove('active');
  }
});