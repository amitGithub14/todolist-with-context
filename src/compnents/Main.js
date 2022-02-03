import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
const Main = () => {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [toEdit, setEdit] = useState(false);
  const [isEditItem, setIsEditItem] = useState(null);

  return (
    <div>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        inputText={inputText}
        toEdit={toEdit}
        setEdit={setEdit}
        isEditItem={isEditItem}
        setIsEditItem={setIsEditItem}
      />
      <TodoList
        toDos={toDos}
        setToDos={setToDos}
        toEdit={toEdit}
        setEdit={setEdit}
        setInputText={setInputText}
        setIsEditItem={setIsEditItem}
      />
    </div>
  );
};

export default Main;
