import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
  return(
    <div>
      <h4> Redux Examples </h4>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <TodoList />
    </div>
  );
};
