import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "./TodoList.css";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h5>Todo List</h5>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr/>
    </div>
);}

