import React, { createContext, useReducer } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  let idCounter = 4; // only because we're not using a server/database

  const initialState = [
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
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            id: idCounter,
            title: action.payload,
            completed: false
          }
        ];

      case "DELETE_TODO":
        return state.filter(todo => todo.id !== action.id);

      case "TOGGLE_COMPLETED":
        console.log("action", action);
        return state.map(todo => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });

      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, initialState);

  const value = {
    todos,
    dispatch
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
