import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const Todo = ({ todo }) => {
  const { deleteTodo, toggleTodoCompleted } = useContext(TodosContext);
  console.log("todo: ", todo);
  return (
    <li>
      {todo.title} - {todo.completed ? "Complete" : "Incomplete"}
      <button onClick={() => toggleTodoCompleted(todo.id)}>
        Toggle Status
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};
export default Todo;
