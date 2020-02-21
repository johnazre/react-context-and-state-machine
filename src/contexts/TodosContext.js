import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  let idCounter = 4;
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    }
  ]);

  const toggleTodoCompleted = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    console.log("heard", updatedTodos);
    setTodos(updatedTodos);
  };

  const addTodo = newTodo => {
    setTodos([...todos, { id: idCounter, title: newTodo, completed: false }]);
    idCounter++;
  };

  const deleteTodo = id => {
    let updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const value = {
    todos,
    addTodo,
    toggleTodoCompleted,
    deleteTodo
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
