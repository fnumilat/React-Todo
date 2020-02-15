import React from 'react';
import "./Todo.css";


const Todo = props => {


    return (
      <div
          className={`todo${props.todo.completed ? "completed" : ""}`}
          onClick={() => props.toggleTodo(props.todo.id)}
        >
        <p className="Todo-Item">{props.todo.task}</p>
      </div>
    );
}

export default Todo;
