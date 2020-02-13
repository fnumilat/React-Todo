import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Do the stock inventory',
    id: 1,
    completed: false
  },
  {
    task: 'Check the receiving office for packages',
    id: 2,
    completed: false
  },
  {
    task: "Make the monthly accuracy report",
    id: 3,
    completed: false
  }
];


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  toggleTodo = todoId => {
    console.log(todoId);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.todos);
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
    console.log(this.state.todos);
  };

  addTodo = (e, todo) => {
    e.preventDefault();

    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <>
      <div>
        <TodoForm addTodo={this.addTodo}/>
      </div>
      <div>
        <TodoList
        todos={this.state.todos}
        toggleTodo={this.toggleTodo}
        clearCompleted={this.clearCompleted}
        />
     </div>
     </>
    );
  }
}

export default App;
