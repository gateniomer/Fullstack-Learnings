//Intantiate ajaxLib
const ajax = new ajaxLib();

ajax.get('https://cat-fact.herokuapp.com/facts',function(result){
  const test2 = result;
  document.querySelector('.container').innerHTML+=`<h1>test2</h1>`;
});

ajax.get('https://cat-fact.herokuapp.com/facts',function(result){
  const test = result;
  document.querySelector('.container').innerHTML+=`<h1>${test}</h1>`;
});