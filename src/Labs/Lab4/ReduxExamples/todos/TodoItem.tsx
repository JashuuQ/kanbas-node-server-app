import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
  id: string;
  title: string;
};

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <div>
        <button
          onClick={() => dispatch(setTodo(todo))}
          className="btn btn-primary"
        >
          Edit
        </button>
        
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger"
        >
          Delete
        </button>

      </div>
    </li>
  );
}
