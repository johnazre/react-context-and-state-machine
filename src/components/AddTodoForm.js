import React, { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useContext(TodosContext);

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newTodo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <span>New Todo:</span>
        <input
          name="new_todo"
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default AddTodoForm;
