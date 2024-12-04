import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h5>Array State Variable</h5>
      <button onClick={addElement}
              className="button-common btn-green"
              id="wd-add-element-click">Add Element</button>

      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteElement(index)}
                    className="button-common btn-red"
                    id="wd-delete-element-click">
              Delete</button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
