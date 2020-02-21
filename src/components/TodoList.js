import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import Todo from "./Todo";

const TodoList = props => {
  const { todos } = useContext(TodosContext);

  const completedTodos = todos
    .filter(todo => todo.completed)
    .map(todo => <Todo key={todo.id} todo={todo} />);

  const incompleteTodos = todos
    .filter(todo => !todo.completed)
    .map(todo => <Todo key={todo.id} todo={todo} />);

  return (
    <React.Fragment>
      <p>Incomplete Todos</p>
      <ul>{incompleteTodos}</ul>
      <p>Completed Todos</p>
      <ul>{completedTodos}</ul>
    </React.Fragment>
  );
};

export default TodoList;
