import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported

type ToDoCardProps = {
  children: React.ReactNode;
  onEdit?: () => void;
  onDelete?: () => void;
};

function ToDoCard({ children, onEdit, onDelete }: ToDoCardProps) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{children}</span>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-outline-primary btn-sm"
          onClick={onEdit}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDelete}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoCard;
