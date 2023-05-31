import React from 'react';

interface TodoListProps {
  items: { id: string, text: string }[];
};

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  )
};

export default TodoList;
