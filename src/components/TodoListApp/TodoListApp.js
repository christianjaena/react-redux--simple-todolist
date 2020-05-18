import React from 'react';
import TodoList from '../TodoList/TodoList';
import './TodoListApp.css';

import { connect } from 'react-redux';
import { inputTodo, submitTodo, deleteTodo } from '../../actions';

const mapStateToProps = state => ({
	input: state.input,
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	onInputChange: event => {
		dispatch(inputTodo(event.target.value))
	},
	onButtonSubmit: () => dispatch(submitTodo()),
	onDelete: (index) => dispatch(deleteTodo(index))
})

class TodoListApp extends React.Component {
	render() {
		const { onInputChange, onButtonSubmit, todos, input, onDelete } = this.props;
		return (
			<div className='todolist'>
				<TodoList
               onInputChange={onInputChange}
               onButtonSubmit={onButtonSubmit}
					todoList={todos}
					onDelete={onDelete}
					input={input}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListApp);
