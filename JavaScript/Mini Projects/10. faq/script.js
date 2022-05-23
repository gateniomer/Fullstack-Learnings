const faqContainer = document.querySelector('.faq-container');
const faqs = document.querySelectorAll('.faq-wrapper');
faqContainer.addEventListener('click',e => {
  if(e.target.classList.contains('close')){
    const div = e.target.parentElement;
    if(div.classList.contains('active')){
      div.classList.remove('active');
      e.target.innerText = '+';
    }else{
      resetActiveClass();
      div.classList.add('active');
      e.target.innerText = 'x';
    }
  }
});

function resetActiveClass(){
  faqs.forEach(faq =>{
    faq.classList.remove('active');
    faq.children[2].textContent = '+';
  });
}