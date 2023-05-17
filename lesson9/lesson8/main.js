
// var countElement = document.getElementsByClassName('count')[0]
// var incBtn = document.getElementsByClassName('inc')[0] 
// var decBtn = document.getElementsByClassName('dec')[0]
// var count = 5;
// function inc() {
//   count++;
//   countElement.innerHTML = myChislo;
// }
// function dec() {
//   count--;
//   countElement.innerHTML = count;
// }
// // setTimeout(arg1, arg2)
// setTimeout(() => {
//   console.log('Test')
// }, 3000)
// setInterval(() => {
//   console.log('SetInterval')
// }, 2000)
// incBtn.addEventListener('click', inc);


// git github 
// setTimeOut() - setInterval()
// Project - Todo List




const TodoListTasks = [];

var todoListAddBtn = document.getElementById('todo-list-task-add-btn');
var todoListElement = document.getElementById('todo-list');

todoListAddBtn.addEventListener('click', AddTodo)

function AddTodo() {
    var todoListTaskText = document.getElementById('todo-list-task-text').value;
    console.log(todoListTaskText)
    AddTodoViewModel(todoListTaskText);
    RenderViewModel();
}

function AddTodoViewModel(text){
  var newTodo = {
    Id: TodoListTasks.length + 1,
    Text: text,
    IsCompleted: false,
  };
  TodoListTasks.push(newTodo);
}

function ToggleTodo (taskId) {
  var selectedTask = TodoListTasks.find((task) => task.id === taskId); // id = 1 = selectedTask

  var indexOfSelectedTask = TodoListTasks.indexOf(selectedTask); // index = 1

  TodoListTasks[indexOfSelectedTask].IsCompleted = !TodoListTasks[indexOfSelectedTask].IsCompleted;
  RenderViewModel();
}

function RemoveTodo(taskId) {
  var selectedTask = TodoListTasks.find((task) => task.id === taskId); // id = selectedTask
  var indexOfSelectedTask = TodoListTasks.indexOf(selectedTask); // index = indexOfSelectedTask
  TodoListTasks.splice(indexOfSelectedTask, 1);
  RenderViewModel();
}


function CreateTodoListTaskComponent (task) {
  return `
  <li class="todolist-todo ${task.IsCompleted ? 'completed' : ''} ">
    <span>
      <input onchange="ToggleTodo(${task.id})" type="checkbox" id="todolist-checkbox-${task.Id}">
      <label for="todolist-checkbox-${task.Id}">${task.Text}</label>
    </span>
    <button onClick="RemoveTodo(${task.Id})" class="todolist-remove-todo">Удалить</button>
  </li>
  `
}

function RenderViewModel(){
  var todoListRenderInfo = "";
  for (var task of TodoListTasks){
    todoListRenderInfo = todoListRenderInfo.concat(CreateTodoListTaskComponent(task));
  }
  todoListElement.innerHTML = todoListRenderInfo;
}


function RenderViewModel(filterValue){
  var filteredTasks = [...TodoListTasks];
  switch(Number(filterValue)){
    case 1:
  }
}



