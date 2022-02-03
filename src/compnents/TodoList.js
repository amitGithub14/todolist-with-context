import React from 'react';
import Todo from './Todo';

const TodoList = ({
  toDos,
  setToDos,
  setEdit,
  toEdit,
  setInputText,
  setIsEditItem,
}) => {
  return (
    <ul className="list-group">
      {toDos.map((todo) => (
        <Todo
          toDos={toDos}
          todo={todo}
          setToDos={setToDos}
          key={todo.id}
          text={todo.text}
          setEdit={setEdit}
          toEdit={toEdit}
          setInputText={setInputText}
          setIsEditItem={setIsEditItem}
        />
      ))}
    </ul>
  );
};

export default TodoList;
