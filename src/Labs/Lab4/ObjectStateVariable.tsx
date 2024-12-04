import React, { useState } from "react";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div>
      <h5>Object State Variables</h5>
      {/* text within pre displays exactly as written */}
      <pre>{JSON.stringify(person, null, 2)}</pre>
      
      <input
        defaultValue={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        defaultValue={person.age}
        onChange={(e) => setPerson({ ...person,
                                     age: parseInt(e.target.value) })}
      />
      <hr/>
    </div>
  );
}
