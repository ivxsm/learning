import React, { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const handelEditTodo = (index: number) => {
    const updatedTodo = prompt("edit your todo item ", todos[index]);
    if (updatedTodo !== null) {
      const updatedTodos = todos.slice();
      updatedTodos[index] = updatedTodo;
      setTodos(updatedTodos);
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-4 text-center">To Do List</h1>
      <ToDoInput handleAddTodo={handleAddTodo} />
      <ToDoList
        todos={todos}
        onEdit={handelEditTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
