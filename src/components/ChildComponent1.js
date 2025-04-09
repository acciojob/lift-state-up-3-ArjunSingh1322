import React from "react";

const ChildComponent1 = ({ onSelect }) => {
  return (
    <div style={{ backgroundColor: "brown", padding: "10px", marginBottom: "10px" }}>
      <h1>Child Component 1</h1>
      <button onClick={() => onSelect("Option 1")}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
