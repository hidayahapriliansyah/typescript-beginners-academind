import React from 'react';

interface TodoListProps {
  items: { id: string, text: string }[];
  deleteTodoHandler: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, deleteTodoHandler }) => {
  return (
    <ul>
      {items.map((todo, index) => (
        <li key={index}>
          <div>
            {todo.text}
          </div>
          <button onClick={() => deleteTodoHandler(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
};

export default TodoList;
