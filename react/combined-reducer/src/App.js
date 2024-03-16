import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App(){
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const addTodo = todo => {
    dispatch({type: 'ADD_TODO', payload: todo});
  };

  const removeTodo = todo => {
    dispatch({type: 'REMOVE_TODO', payload: id});
  };

  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todoList} removeTodo={removeTodo}/>
    </div>
  )
}

export default App;