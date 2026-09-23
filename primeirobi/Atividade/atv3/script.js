const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';


  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  li.appendChild(checkbox);
  li.appendChild(span);

  taskList.appendChild(li);


  taskInput.value = '';
  taskInput.focus();
}


addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});


taskList.addEventListener('click', (event) => {
  const clickedCheckbox = event.target.classList.contains('task-checkbox');
  const li = event.target.closest('li');
  if (!li) return;

  if (clickedCheckbox) {

    li.classList.toggle('completed', event.target.checked);
  } else {

    li.remove();
  }
});