const jokeHeading = document.querySelector('#joke');
const jokeButton = document.querySelector('#btn');
const loading = document.querySelector('span');

async function getJoke(){
  loading.style.visibility='visible';
  const response = await fetch('https://icanhazdadjoke.com/',{
    headers:{
      'Accept':'application/json'
    }
  });
  const data = await response.json();
  loading.style.visibility='hidden';
  return data.joke;
}

jokeButton.addEventListener('click',()=>{
  getJoke()
  .then(joke => jokeHeading.innerText = joke)
  .catch(err => console.log(err));
});

