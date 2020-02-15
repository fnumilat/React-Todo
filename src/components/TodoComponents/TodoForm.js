import React, { Component } from 'react';
import "./Todo.css";


class TodoForm extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo1:""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todo);
  };


 

  render() {
    return (
        <form className="Form" onSubmit={this.submitTodo}>
            <input className="Form-Input" type="text" name="todo" placeholder="Type Here" onChange={this.handleChanges}/>
            <button className="Form-Button">Add New Task</button>
        </form>
    );
  }
}

export default TodoForm;