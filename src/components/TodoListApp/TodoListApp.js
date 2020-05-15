import React from 'react';
import TodoList from '../TodoList/TodoList';
import './TodoListApp.css';
class TodoListApp extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			todos: [],
		};
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onButtonSubmit = () => {
		if (this.state.input !== '') {
			this.setState(state => {
				const add = state.todos.concat(this.state.input)
				return {
					input: '',
					todos: add
				}
			})
		} else {
			alert('input is empty')
		}
      
	};
	
	onDelete = (index) => {
		this.setState({ todos: this.state.todos.filter(item => item !== this.state.todos[index]) });
	}
   
	render() {
		return (
			<div class='todolist'>
				<TodoList
               onInputChange={this.onInputChange}
               onButtonSubmit={this.onButtonSubmit}
					todoList={this.state.todos}
					onDelete={this.onDelete}
					input={this.state.input}
				/>
			</div>
		);
	}
}

export default TodoListApp;
