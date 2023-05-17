
var countElement = document.getElementsByClassName('count')[0]
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
// Project - Todo List




const TodoListTasks = [];

var todoListAddBtn = document.getElementById('todo-list-task-add-btn')

todoListAddBtn.addEventListener('click', AddTodo)

function AddTodo() {
    var todoListTaskText = document.getElementById('todo-list-task-text').value;
    console.log(todoListTaskText)
}
