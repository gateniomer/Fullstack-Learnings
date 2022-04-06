const panels = document.querySelectorAll('.panel');

document.querySelector('.container').addEventListener('click',function(e){
  if(e.target.classList.contains('panel')){
    
    //Logic
    removeActiveClasses();
    addActiveClass(e.target);
  }
});

function addActiveClass(target){
  target.classList.add('active');
}
function removeActiveClasses(){
  panels.forEach(panel =>{
    panel.classList.remove('active');
  });
}