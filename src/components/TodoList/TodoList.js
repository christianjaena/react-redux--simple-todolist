import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

const TodoList = ({ onButtonSubmit, onInputChange, todoList, onDelete, input}) => {
	const todo = todoList.map((item, index) => {
		return <Todo
					id={index}
					todo={item} 
					onDelete={onDelete}
				/>
	})
	
	return (
		<div>
			<AddTodo
				onButtonSubmit={onButtonSubmit}
				onInputChange={onInputChange}
				input={input}
			/>
			{todo}
		</div>
	);
}

export default TodoList;
