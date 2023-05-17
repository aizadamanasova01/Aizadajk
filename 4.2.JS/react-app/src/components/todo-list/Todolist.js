import TodoListItem from "../todo-list-item/TodoListItem";



const Todolist =()=>{
    return(
        <ul>
           <li>
            <TodoListItem label ='HTML'  aizada='Aizada'/>
           </li>
           <li>
            <TodoListItem label="JS"/>
           </li>
        </ul>
        
    );
};


export default Todolist
