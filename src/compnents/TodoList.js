import React from 'react';
import Todo from './Todo';

const TodoList = ({ toDos, setToDos }) => {
  return (
    <ul className="list-group">
      {toDos.map((todo) => (
        <Todo
          toDos={toDos}
          todo={todo}
          setToDos={setToDos}
          key={todo.id}
          text={todo.text}
        />
      ))}
    </ul>
  );
};

export default TodoList;
