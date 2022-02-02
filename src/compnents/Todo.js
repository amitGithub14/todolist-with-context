import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Todo = ({ text, todo, toDos, setToDos }) => {
  const handleDelete = () => {
    setToDos(toDos.filter((el) => el.id !== todo.id));
  };

  const handleCheck = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-start">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          defaultChecked={todo.completed}
          onClick={handleCheck}
        />
      </div>
      <div className="d-flex">
        <p
          className={`${todo.completed ? 'text-decoration-line-through' : ''}`}
        >
          {text}
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-link" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} color="red" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
