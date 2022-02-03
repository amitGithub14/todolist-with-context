import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import TaskContextProvider from '../context/TaskContext';

const Main = () => {
  return (
    <TaskContextProvider>
      <Form />
      <TodoList />
    </TaskContextProvider>
  );
};

export default Main;
