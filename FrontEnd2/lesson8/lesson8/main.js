/*var countElement = document.getElementsByClassName('count')[0]
var incBtn = document.getElementsByClassName('inc')[0] 
var decBtn = document.getElementsByClassName('dec')[0]
var count = 5;
function inc() {
  count++;
  countElement.innerHTML = myChislo;
}
function dec() {
  count--;
  countElement.innerHTML = count;
}
// setTimeout(arg1, arg2)
setTimeout(() => {
  console.log('Test')
}, 3000)
setInterval(() => {
  console.log('SetInterval')
}, 2000)
incBtn.addEventListener('click', inc);
// git github 
// setTimeOut() - setInterval()
// Project - Todo List*/




const TodoListTasks = [];

var todoListAddBtn = document.getElementById('todo-list-task-add-btn')

todoListAddBtn.addEventListener('click', AddTodo)

function AddTodo() {
    var todoListTaskText = document.getElementById('todo-list-task-text').value;
    console.log(todoListTaskText)
    AddTodoVirewModel(todoListTaskText)
    RenderViewModel();
}



function AddTodoVirewModel(text){   //чакыруу
  var newTodo = {
    id: TodoListTasks.length + 1,
    Text: text,
    IsCopleted: false,
  };
  TodoListTasks.push(newTodo);
}

function CreateTodoListTaskComponent (task){
  return `
  <li>
    <span>
    <input type="checkbox" id="todolist-checkbox- ${task.id}">
    <label for="todolist-checkbox-${task.id}"> ${task.Text}</label>
    </span>
  </li>
  
  `
}


function RenderViewModel(){
  var todoListRenderInfo = "";
  for(var task of TodoListTasks){
    todoListRenderInfo = todoListRenderInfo.concat
    (CreateTodoListTaskComponent(task));
  }
  todoListElement.innerHTML = todoListRenderInfo;
}
