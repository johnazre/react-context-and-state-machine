import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);
  console.log("todo: ", todo);
  return (
    <li>
      {todo.title} - {todo.completed ? "Complete" : "Incomplete"}
      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_COMPLETED",
            id: todo.id
          })
        }
      >
        Toggle Status
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TODO",
            id: todo.id
          })
        }
      >
        Delete
      </button>
    </li>
  );
};
export default Todo;
