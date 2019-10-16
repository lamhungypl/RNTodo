import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './actionTypes';
let nextId = 0;
export const addTodo = text => {
  return {type: ADD_TODO, id: nextId++, text};
};
export const toggleTodo = id => {
  return {type: TOGGLE_TODO, id};
};
export const deleteTodo = id => {
  return {type: DELETE_TODO, id};
};
