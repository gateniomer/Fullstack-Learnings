const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const taskInput = document.querySelector('#task-input');
const noTaskMessage = document.querySelector('.no-task-message');
const clearBtn = document.querySelector('#clear');
const searchInput = document.querySelector('#search-input');
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
  document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage);
  form.addEventListener('submit',addTask);
  taskList.addEventListener('click',deleteTask);
  clearBtn.addEventListener('click',deleteAllTasks);
  searchInput.addEventListener('keyup',function(e){
    e.preventDefault();
    const inputText=e.target.value.toLowerCase();
    // for(let i=0;i<taskList.childElementCount;i++){
    //   if(taskList.children[i].innerText.includes(e.target.value)){
    //     taskList.children[i].style.display='flex';
    //   }else{
    //     taskList.children[i].style.display ='none';
    //   }
      
    // }
    document.querySelectorAll('.task').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(inputText)!== -1){
        task.style.display='flex';
      }else{
        task.style.display='none';
      }
    });
  });
}

function addTask(e){
  e.preventDefault();

  if(taskInput.value === ''){
    alert('Please insert task title');
    return;
  }

  

  const li = document.createElement('li');
  li.className='task';
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

  storeTasksInLocalStorage(li.firstChild.textContent);

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
  removeTaskFromLocalStorage(e.target.parentElement);
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
  if(confirm('Are you sure you want to delete all tasks?')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
      removeTaskFromLocalStorage(taskList.firstChild);
    }
    checkForTasks();
  }
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

function storeTasksInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getTasksFromLocalStorage(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task){
    const li = document.createElement('li');
  li.className='task';
  // li.innerText=`#${taskList.childElementCount+1} ${taskInput.value}`;
  li.appendChild(document.createTextNode(task));
  const time = document.createElement('span');
  time.innerText=` ${new Date().getHours()}:${new Date().getMinutes()}`;
  time.className='grayed';
  li.appendChild(time);

  const deleteLink = document.createElement('a');

  deleteLink.className='delete';
  deleteLink.innerText='⌫';
  li.appendChild(deleteLink);

  taskList.appendChild(li);
  });
  checkForTasks();
}

function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task,index){
    console.log(taskItem.firstChild.textContent);
    if(taskItem.firstChild.textContent===task){
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}