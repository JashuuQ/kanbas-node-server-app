import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

export default function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
    <div>
      <h5>Counter {counter}</h5>
      <ChildStateComponent
        counter={counter}
        setCounter={setCounter} />
    </div>
);}
