import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
const Todo = ({ todo }) => {
  const { toDos, setToDos, setEdit, setInputText, setIsEditItem } =
    useContext(TaskContext);

  const handleDelete = () => {
    setToDos(toDos.filter((el) => el.id !== todo.id));
  };

  const handleEdit = (id) => {
    setEdit(true);
    let newEditItem = toDos.find((el) => {
      return el.id === id;
    });
    //console.log(newEditItem);
    setInputText(newEditItem.text);
    setIsEditItem(todo.id);
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
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="p-2">
          <input
            className="form-check-input me-5"
            type="checkbox"
            value=""
            defaultChecked={todo.completed}
            onClick={handleCheck}
          />
        </div>
        <div className="align-self-center">
          <span
            className={`${
              todo.completed ? 'text-decoration-line-through' : ''
            }`}
          >
            {todo.text}
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <button
            type="button"
            className="btn btn-link"
            disabled={todo.completed}
            onClick={() => handleEdit(todo.id)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-link" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} color="red" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
