import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Todo from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text }]);
  };

  const deleteTodoHandler = (todoId: string) =>{
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="App">
      {/* components add */}
      <NewTodo addTodoHandler={addTodoHandler}/>
      <TodoList items={todos} deleteTodoHandler={deleteTodoHandler}/>
    </div>
  );
}

export default App;
