import React, { Component } from 'react';


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
        <form onSubmit={this.submitTodo}>
            <input type="text" name="todo" onChange={this.handleChanges}/>
            <button>Add New Task</button>
        </form>
    );
  }
}

export default TodoForm;