const textArea = document.querySelector('#choice-textarea');
const choiceContainer = document.querySelector('#choice-container');

textArea.focus();

textArea.addEventListener('keydown',e => {
  const value = e.target.value;
  const choices = value.split(',');
  choiceContainer.innerHTML = '';
  choices.forEach(choice => {
    if(choice!=='')
      choiceContainer.innerHTML+=`
      <span class= 'choice'>${choice}</span>
      `
  });
  if(e.code === 'Enter'){
    e.preventDefault();
    const inter = setInterval(choose,100);
  }
});

function choose(){
  const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => choice.classList.remove('chosen'));
  const random = Math.floor(Math.random() * choices.length);
  choiceContainer.children[random].classList.add('chosen');
}