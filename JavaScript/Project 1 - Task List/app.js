const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const taskInput = document.querySelector('#task-input');
const noTaskMessage = document.querySelector('.no-task-message');


checkForTasks();
loadEventListeners();

function checkForTasks(){
  const childCount=taskList.childElementCount;
  if(childCount !== 0){
    noTaskMessage.innerText=`${childCount} Tasks To Complete`;
  }else{
    noTaskMessage.innerText='No Tasks Available';
  }
}

function loadEventListeners() {
  //Add Task Event
  form.addEventListener('submit',addTask);
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
  time.className='li-time';
  li.appendChild(time);

  const deleteLink = document.createElement('a');

  deleteLink.className='delete';
  deleteLink.innerHTML='<p>⌫</p>';
  deleteLink.addEventListener('click',function(e){
    deleteLink.parentElement.remove();
    checkForTasks();
  });
  li.appendChild(deleteLink);

  taskList.appendChild(li);
  taskInput.value='';

  checkForTasks();
}