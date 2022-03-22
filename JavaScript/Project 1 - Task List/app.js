const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const taskInput = document.querySelector('#task-input');
const noTaskMessage = document.querySelector('.no-task-message');
const clearBtn = document.querySelector('#clear');
const searchForm = document.querySelector('#search-form');
const card = document.querySelector('.card');

checkForTasks();
loadEventListeners();

function checkForTasks(){
  const childCount=taskList.childElementCount;
  
  taskToComplete(childCount);
  show(childCount);
}

function loadEventListeners() {
  //Add Task Event
  form.addEventListener('submit',addTask);
  taskList.addEventListener('click',deleteTask);
  clearBtn.addEventListener('click',deleteAllTasks);
}

function addTask(e){
  e.preventDefault();

  if(taskInput.value === ''){
    alert('Please insert task title');
    return;
  }

  

  const li = document.createElement('li');

  // li.innerText=`#${taskList.childElementCount+1} ${taskInput.value}`;
  li.appendChild(document.createTextNode(`#${taskList.childElementCount+1} ${taskInput.value}`));
  const time = document.createElement('span');
  time.innerText=` ${new Date().getHours()}:${new Date().getMinutes()}`;
  time.className='grayed';
  li.appendChild(time);

  const deleteLink = document.createElement('a');

  deleteLink.className='delete';
  deleteLink.innerText='⌫';
  li.appendChild(deleteLink);

  taskList.appendChild(li);
  taskInput.value='';

  checkForTasks();
}

function deleteTask(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure you want to delete this task?')){
    e.target.parentElement.remove();
    checkForTasks();
    }
  }
}

function deleteAllTasks(e){
  e.preventDefault();
  // //slower
  // let len = taskList.childElementCount;
  // console.log(taskList.childCount);
  // for(let i=0;i<len;i++){
  //   taskList.children[0].remove();
  // }

  //faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  checkForTasks();
}

function taskToComplete(childNum){
  if(childNum !== 0){
    noTaskMessage.innerText=`${childNum} Tasks To Complete`;
    
  }else{
    noTaskMessage.innerText='No Tasks Available';
  }
}

function show(childNum){
  for(let i=0;i<card.childElementCount;i++){
    if(card.children[i].classList.contains('show')){
      if(childNum!== 0)
        card.children[i].style.visibility='visible';
      else
        card.children[i].style.visibility='hidden';
    }
  }
}