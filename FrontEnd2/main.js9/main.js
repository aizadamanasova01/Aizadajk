/*    <div class="counter">
        <button class="inc">Increment</button>
        <span class="count">0</span>
        <button class="dec" onclick=(dec())>Decrement</button>
    </div>

*/







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

function ToggleTodo (taskId){
    var selectedTask = TodoListTasks.find((task) => task.id === taskId);
    

    var indexOfSelectedTask = TodoListTasks.indexOf(selectedTask);
    TodoListTasks[indexOfSelectedTask].IsCompleted =
    !TodoListTasks[indexOfSelectedTask].IsCompleted;
    RenderViewModel();
}

function RemoveTodo (taskId){
    var selectedTask = TodoListTasks.find((task) => task.id === taskId);//id = selectedTask

}

function CreateTodoListTaskComponent (task) {
  return `
  <li class="todolist-todo ${task.IsCompleted ? 'completed' : ' '} completed">
    <span>
      <input onchange="ToggleTodo($(task.id))" type="checkbox" id="todolist-checkbox-${task.Id}">
      <label for="todolist-checkbox-${task.Id}">${task.Text}</label>
    </span>
    <button class="todolist-remove-todo">Удалить</button>
  </li>
  `
}

function RenderViewModel(){
  var todoListRenderInfo = "";
  for (var task of TodoListTasks){
    todoListRenderInfo = todoListRenderInfo.concat(CreateTodoListTaskComponent(task));
  };

  todoListElement.innerHTML = todoListRenderInfo;
}

