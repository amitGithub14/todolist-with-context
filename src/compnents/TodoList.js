import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Todo from './Todo';

const TodoList = () => {
  const { toDos } = useContext(TaskContext);

  return (
    <>
      {!toDos ? (
        <div>No List found</div>
      ) : (
        <ul className="list-group">
          {toDos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
