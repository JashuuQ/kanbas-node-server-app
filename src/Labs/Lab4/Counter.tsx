import React, { useState } from "react";
import './index.css';

export default function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);

  console.log(count);
  return (
    <div id="wd-counter-container">
      <h5>Counter: {count}</h5>
      <button onClick={() => setCount(count + 1)}
              className="button-common btn-green"
              id="wd-counter-up-click">Up</button>
      <button onClick={() => setCount(count - 1)}
              className="button-common btn-red"
              id="wd-counter-down-click">Down</button>
    <hr/>
  </div>);}
