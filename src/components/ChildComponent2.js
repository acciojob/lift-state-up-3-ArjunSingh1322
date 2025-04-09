import React from "react";

const ChildComponent2 = ({ onSelect }) => {
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <h1>Child Component 2</h1>
      <button onClick={() => onSelect("Option 2")}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
