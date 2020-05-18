import { ADD_INPUT, ADD_TODO, DELETE_TODO } from './constants.js';

export const inputTodo = (input) => ({ type: ADD_INPUT, payload: input });
export const submitTodo = () => ({ type: ADD_TODO });
export const deleteTodo = (index) => ({ type: DELETE_TODO, payload: index });
