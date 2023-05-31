import React, { useRef } from 'react';

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  console.log('textInputRef before render');
  console.log(textInputRef);
  
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    // textInputRef.current!.focus();
    console.log('textInputRef after render');
    console.log(textInputRef);
    console.log('textInputRef.current');
    console.log(textInputRef.current);
    console.log(textInputRef.current!.id);
    console.log(typeof textInputRef.current);
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef}/>
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;