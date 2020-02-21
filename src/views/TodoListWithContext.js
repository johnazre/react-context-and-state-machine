import React, { useContext } from "react";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

const TodoListWithContext = props => {
  return (
    <React.Fragment>
      <AddTodoForm />
      <TodoList />
    </React.Fragment>
  );
};

export default TodoListWithContext;
