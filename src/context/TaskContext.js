import React, { createContext, useState } from 'react';
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [inputText, setInputText] = useState('');
  const [toDos, setToDos] = useState([]);
  const [toEdit, setEdit] = useState(false);
  const [isEditItem, setIsEditItem] = useState(null);

  return (
    <TaskContext.Provider
      value={{
        inputText,
        setInputText,
        toDos,
        setToDos,
        toEdit,
        setEdit,
        isEditItem,
        setIsEditItem,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
