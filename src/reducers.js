import { ADD_INPUT, ADD_TODO, DELETE_TODO } from './constants';

const initialStateTodo = {
	input: '',
	todos: [],
};

export const todoActions = (state = initialStateTodo, action = {}) => {
	switch (action.type) {
		case ADD_INPUT:
			return Object.assign({}, state, { input: action.payload });
		case ADD_TODO:
			const add = state.todos.concat(state.input);
			return Object.assign({}, state, { todos: add });
		case DELETE_TODO:
			const filter = state.todos.filter(
				(item) => item !== state.todos[action.payload]
			);
			return Object.assign({}, state, { todos: filter });
		default:
			return state;
	}
};
