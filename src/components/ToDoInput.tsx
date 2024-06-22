import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

type ToDoInputProps = {
  handleAddTodo: (newTodo: string) => void;
};

function ToDoInput({ handleAddTodo }: ToDoInputProps) {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = () => {
    if (todoValue.trim()) {
      handleAddTodo(todoValue);
      setTodoValue("");
    }
  };

  return (
    <header className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="New Task ! "
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </header>
  );
}

export default ToDoInput;
