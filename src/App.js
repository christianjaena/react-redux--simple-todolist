import React from 'react';
import './App.css';
import TodoListApp from './components/TodoListApp/TodoListApp';

const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date().toLocaleDateString('en-us', options);


function App() {
	return (
		<div className="App">
			<h1>Todo List</h1>
			<h2>{date}</h2>
			<TodoListApp />
		</div>
	);	
}

export default App;
