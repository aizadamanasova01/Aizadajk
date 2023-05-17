import { useSelector, useDispatch } from "react-redux";

import { addNewTask, removeTask } from './toolkit'

const App = () => {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const onAddTask = (e) => {
    e.preventDefault();
    const form = e.tatget;
    const newTodo = {
      title: form.title.value,
      id: Math.random(),
    };
    dispatch(addNewTask()) // redux-toolkit
    // dispatch({ type:  newTodo }) //redux - toolkit
    // dispatch({ type: "ADD-TODO", payloat: newTodo }) //redux - toolkit

  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}
          <span
          style={{
            cursor:'pointer',
            padding:'5px',
            background: 'tomato'
          }}
          onClick={() => {
           //todo = {title : '', id: 0.6456} 
          //  dispatch({type:'REMOVE-TODO', payload: todo}) // redux


            dispatch(removeTask(todo)) // bull toolkid

          }}
          >&times;</span></li>;
        })}
      </ul>
      <div>
        <from onSudmit={onAddTask}>
          <label>
            <input type="text" placeholder="enter text" name="title" />
          </label>
          <button>Add TASK</button>
        </from>
      </div>
    </div>
  );
};
