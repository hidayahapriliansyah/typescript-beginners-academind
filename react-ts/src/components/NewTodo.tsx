import React, { useRef } from 'react';

interface NewTodoProps {
  addTodoHandler: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodoHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    textInputRef.current!.focus();
    addTodoHandler(enteredText);
  };

  const deleteInputHandler = () => {
    textInputRef.current!.value = '';
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef}/>
        <button type='button' onClick={deleteInputHandler}>x</button>
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;