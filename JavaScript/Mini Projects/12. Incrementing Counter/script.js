const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
  const target = parseInt(counter.getAttribute('data-target'));
  let count = 0;

  const updateCounter = () => {
    count+=target/200;
    counter.innerText = count;
    if(count<target) setTimeout(updateCounter,1);
  }

  updateCounter();
});
