import React from "react";
import ToDoCard from "./ToDoCard";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

type ToDoListProps = {
  todos: string[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};

function ToDoList({ todos, onEdit, onDelete }: ToDoListProps) {
  return (
    <main className="container mt-4">
      <ul className="list-group">
        {todos.map((todo, index) => (
          <ToDoCard
            key={index}
            onEdit={() => onEdit(index)}
            onDelete={() => onDelete(index)}
          >
            {todo}
          </ToDoCard>
        ))}
      </ul>
    </main>
  );
}

export default ToDoList;
