import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
const Main = () => {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  return (
    <div>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default Main;
