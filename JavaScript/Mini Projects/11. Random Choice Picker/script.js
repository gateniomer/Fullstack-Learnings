const textArea = document.querySelector('#choice-textarea');
const choiceContainer = document.querySelector('#choice-container');

textArea.focus();

textArea.addEventListener('keyup',e => {
  //get value from textarea
  const value = e.target.value;
  //convet value to array without whitespaces
  const choices = value.split(',')
  .filter(choice => choice.trim()!=='')
  .map(choice=>choice.trim());
  //add choices from array by adding spans
  choiceContainer.innerHTML = '';
  choices.forEach(choice => {
    choiceContainer.innerHTML+=`
    <span class= 'choice'>${choice}</span>
    `
  });

  if(e.code === 'Enter'){
    //get all choices spans
    const choices = document.querySelectorAll('.choice');
    if(choices.length > 0){
      //set interval to choose random choice
      const interval = setInterval(()=>chooseRandom(choices),100);
      //after 3 secondes clear interval and enable textarea again.
      setTimeout(()=>{
        clearInterval(interval);
        e.target.value = '';
        e.target.disabled=false;
        e.target.focus();
      },2000);
    }
  }
});

function chooseRandom(choices){
  //Disable text area
  textArea.disabled= true;
  //remove chosen class from all choices
  choices.forEach(choice => choice.classList.remove('chosen'));
  //add chosen class to random choice
  const random = Math.floor(Math.random() * choices.length);
  choiceContainer.children[random].classList.add('chosen');
}